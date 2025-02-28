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
  console.log("inside");
  
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
    } = req.body;
console.log("res",req.body);

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
      carPhotos: {
        frontView: req.files?.frontView?.[0]?.filename || '',
        rearView: req.files?.rearView?.[0]?.filename || '',
        leftSideView: req.files?.leftSideView?.[0]?.filename || '',
        rightSideView: req.files?.rightSideView?.[0]?.filename || '',
        frontInterior: req.files?.frontInterior?.[0]?.filename || '',
        backInterior: req.files?.backInterior?.[0]?.filename || '',
      },
      renterConditions,
      goals,
      additionalInfo,
    });

    // Save the car to the database

// Modify the save and response code
const savedCar = await newCar.save();
const carObject = savedCar.toObject();
console.log(carObject);
    return res.status(201).json({ message: 'Car added successfully!', car: carObject });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Something went wrong, please try again.' });
  }
});

export default router;
