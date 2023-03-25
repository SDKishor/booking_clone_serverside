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
  const { min, max, limit, ...others } = req.query;
  try {
    const Hotel = await hotel
      .find({ ...others, cheapestPrice: { $gt: min || 1, $lt: max || 999 } })
      .limit(req.query.limit);
    res.status(200).json(Hotel);
  } catch (err) {
    next(err);
  }
};

export const CountByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return hotel.countDocuments({ city: city });
      })
    );

    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};

export const CountByType = async (req, res, next) => {
  try {
    const hotelCount = await hotel.countDocuments({ type: "hotel" });
    const apartmentCount = await hotel.countDocuments({ type: "apartment" });
    const resortCount = await hotel.countDocuments({ type: "resort" });
    const villaCount = await hotel.countDocuments({ type: "villa" });
    const cabinCount = await hotel.countDocuments({ type: "cabin" });

    res.status(200).json([
      { type: "hotel", count: hotelCount },
      { type: "apartment", count: apartmentCount },
      { type: "resort", count: resortCount },
      { type: "villa", count: villaCount },
      { type: "cabin", count: cabinCount },
    ]);
  } catch (err) {
    next(err);
  }
};
