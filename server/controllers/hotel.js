import Hotel from "../models/Hotel.js";

export const createNewHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    next(err);
  }
};

export const updateHotel = async (req, res, next) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (err) {
    next(err);
  }
};

export const deleteHotel = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Successfully deleted the hotel!");
  } catch (err) {
    next(err);
  }
};

export const getSingleHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (err) {
    next(err);
  }
};

export const getAllHotels = async (req, res, next) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch (err) {
    next(err);
  }
};

export const countByCity = async (req, res, next) => {

  const cities = req.query.cities.split(",")// Get the city name from query and make it an array
  try {
    // used Promis.all because we have 3 cities in query
    const list = await Promise.all(cities.map((city) => {
      return Hotel.countDocuments({city:city}) // mongodb method use for counting documents base on queries
    }))
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};
