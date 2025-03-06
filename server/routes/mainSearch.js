import express from "express";
const router = express.Router();
import Car from "../models/Car.js";

router.post("/", async (req, res) => {
  const { destination, startDate, startTime, endDate, endTime } = req.body;
  console.log(req.body);

  try {
    // Validate required fields
    const missingFields = [];
    if (!destination) missingFields.push("destination");
    if (!startDate) missingFields.push("startDate");
    if (!endDate) missingFields.push("endDate");

    if (missingFields.length > 0) {
      return res.status(400).json({
        error: "Missing required fields",
        missing: missingFields,
      });
    }

    // Date validation
    const searchStart = new Date(`${startDate}T${startTime || "00:00"}`);
    const searchEnd = new Date(`${endDate}T${endTime || "23:59"}`);

    if (isNaN(searchStart))
      return res.status(400).json({ error: "Invalid start date" });
    if (isNaN(searchEnd))
      return res.status(400).json({ error: "Invalid end date" });
    if (searchEnd <= searchStart) {
      return res
        .status(400)
        .json({ error: "End date must be after start date" });
    }

    // Find cars in location
    const cars = await Car.find({
      $or: [
        { city: { $regex: destination, $options: "i" } },
        { country: { $regex: destination, $options: "i" } },
      ],
    });
    // console.log("cars",cars)
    // Filter available cars
    const availableCars = cars.filter((car) => {
      try {
        // convert array to number
        const availableDays = car.availabilityDays.map(Number);
        const availableHours = car.availabilityHours.map(Number);
        console.log("avail", availableDays, availableHours);
        console.log(
          "isCarAvailable",
          isCarAvailable(availableDays, availableHours, searchStart, searchEnd)
        );

        return isCarAvailable(
          availableDays,
          availableHours,
          searchStart,
          searchEnd
        );
      } catch (error) {
        console.error("Error processing car:", car._id, error);
        return false;
      }
    });
    console.log("availableCars", availableCars);
    res.json(availableCars);
  } catch (error) {
    console.error("Search error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

function isCarAvailable(availableDays, availableHours, searchStart, searchEnd) {
  // Calculate total rental days
  const totalDays = calculateTotalDays(searchStart, searchEnd);
  console.log("Total days needed:", totalDays, "Max allowed:", availableDays);

  // Check day availability
  if (totalDays > availableDays) return false;

  // Calculate hours needed per day
  const hoursPerDay = getMaxHoursPerDay(searchStart, searchEnd);
  console.log(hoursPerDay);
  const maxNeededHours = Math.min(...hoursPerDay);
  console.log(
    "Max hours needed:",
    maxNeededHours,
    "Max allowed:",
    availableHours
  );

  // Check hourly availability
  if (maxNeededHours > availableHours) return false;

  return true;
}

function getMaxHoursPerDay(start, end) {
  const hoursPerDay = [];
  const current = new Date(start);

  while (current <= end) {
    const dayStart = new Date(current);
    dayStart.setUTCHours(7, 0, 0, 0);
    const dayEnd = new Date(current);
    dayEnd.setUTCHours(23, 59, 59, 999);

    const overlapStart = new Date(Math.max(start, dayStart));
    const overlapEnd = new Date(Math.min(end, dayEnd));

    const hours = (overlapEnd - overlapStart) / 3600000;
    hoursPerDay.push(hours);

    current.setDate(current.getDate() + 1);
    current.setUTCHours(0, 0, 0, 0);
  }

  return hoursPerDay;
}
function calculateTotalDays(start, end) {
  const diffMs = end - start;
  return Math.ceil(diffMs / (1000 * 60 * 60 * 24));
}

export default router;
