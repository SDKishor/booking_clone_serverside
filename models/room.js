import mongoose from "mongoose";
const { Schema } = mongoose;

const RoomSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },

    maxPeople: {
      type: Number,
      required: true,
    },

    roomnumber: {
      type: [{ number: Number, unavailableDates: { type: [Date] } }],
      required: true,
    },

    des: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Room", RoomSchema);
