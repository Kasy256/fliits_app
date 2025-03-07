import express from 'express';
import Car from '../models/Car.js'; 

const router = express.Router();
// In your Express server file (e.g., server.js or routes/car.js)
// In your Express server file (e.g., server.js or routes/car.js)
router.get('/cars', async (req, res) => {
  try {
    const { search } = req.query; // Get the search query from the request
// console.log("inside search",req.query)
    let query = {};
    if (search) {
      // Use a regex to search for cars that match the search term in the model, city, or country
      query = {
        $or: [
          { model: { $regex: search, $options: 'i' } }, // Case-insensitive search
          { city: { $regex: search, $options: 'i' } },
          { country: { $regex: search, $options: 'i' } },
        ],
      };
    }

    const cars = await Car.find(query); // Fetch cars based on the query
    // console.log("data sent from s",cars)
    res.status(200).json(cars);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong, please try again.' });
  }
});
  
  export default router;