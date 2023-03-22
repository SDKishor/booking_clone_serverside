import hotel from "../models/hotel.js";

export const CreateHotel = async (req, res) => {
  const newHotel = new hotel(req.body);

  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    next(err);
  }
};

export const UpdateHotel = async (req, res) => {
  try {
    const updatedHotel = await hotel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (err) {
    next(err);
  }
};

export const DeleteHotel = async (req, res) => {
  try {
    await hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("item deleted sussesfully");
  } catch (err) {
    next(err);
  }
};

export const GetHotel = async (req, res) => {
  try {
    const Hotel = await hotel.findById(req.params.id);
    res.status(200).json(Hotel);
  } catch (err) {
    next(err);
  }
};

export const GetAllHotels = async (req, res, next) => {
  try {
    const Hotel = await hotel.find();
    res.status(200).json(Hotel);
  } catch (err) {
    next(err);
  }
};
