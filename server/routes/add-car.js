import express from 'express';
import Car from '../models/Car.js'; 
import multer from 'multer';

const router = express.Router();

// Configure Multer for Image Uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});
const upload = multer({ storage });

router.post('/add-car', upload.fields([
  { name: 'frontView' },
  { name: 'rearView' },
  { name: 'leftSideView' },
  { name: 'rightSideView' },
  { name: 'frontInterior' },
  { name: 'backInterior' },
]), async (req, res) => {
  try {
    const {
      model,
      year,
      type,
      color,
      licensePlate, 
      country,
      city,
      carDescription,
      availabilityDays,
      availabilityHours,
      seats,
      fuelType,
      transmission,
      features,
      renterConditions,
      goals,
      additionalInfo,
      dailyRate,
      weeklyRate,
      monthlyRate,
      securityDeposit,
      extraMileageFee,
      lateReturnFee,
      cleaningFee,
    } = req.body;
console.log("rebody",req.body)
    // Check required fields
    if (!model || !year || !licensePlate || !country || !city || !seats || !fuelType || !transmission) {
      return res.status(400).json({ error: 'Required fields are missing' });
    }

    // Create a new car entry
    const newCar = new Car({
      model,
      year,
      type,
      color,
      licensePlate, 
      country,
      city,
      carDescription,
      availabilityDays: availabilityDays?.split(',') || [], 
      availabilityHours: availabilityHours?.split(',') || [], 
      seats: Number(seats), 
      fuelType,
      transmission,
      features: features?.split(',') || [],
      dailyRate,
      weeklyRate,
      monthlyRate,
      securityDeposit,
      extraMileageFee,
      lateReturnFee,
      cleaningFee,
      carPhotos: {
        frontView: req.files?.frontView ? req.files.frontView[0].path : '',
        rearView: req.files?.rearView ? req.files.rearView[0].path : '',
        leftSideView: req.files?.leftSideView ? req.files.leftSideView[0].path : '',
        rightSideView: req.files?.rightSideView ? req.files.rightSideView[0].path : '',
        frontInterior: req.files?.frontInterior ? req.files.frontInterior[0].path : '',
        backInterior: req.files?.backInterior ? req.files.backInterior[0].path : '',
      },
      renterConditions,
      goals,
      additionalInfo,
    });

    // Save the car to the database
    await newCar.save();
console.log(newCar);

    return res.status(201).json({ message: 'Car added successfully!', car: newCar });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Something went wrong, please try again.' });
  }
});

export default router;
