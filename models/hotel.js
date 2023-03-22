import mongoose from "mongoose";
const { Schema } = mongoose;

const HotelSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  distance: {
    type: String,
    required: true,
  },
  photo: {
    type: [String],
  },
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  rooms: {
    type: [String],
  },
  cheapestPrice: {
    type: Number,
    required: true,
  },
  Featured: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("hotel", HotelSchema);

// {
//   "name":"luxin",
//   "type":"hotel",
//   "city":"berlin",
//   "address":"some",
//   "distance":"500",
//   "title":"best hotel in the city",
//   "desc":"jhasjd sahahd adh kja dhjhajdha dkjas",
//   "cheapestPrice":100
// }
