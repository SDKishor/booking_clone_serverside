import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRouth from "./routes/auth.js";
import hotelsRouth from "./routes/hotels.js";
import roomsRouth from "./routes/rooms.js";
import usersRouth from "./routes/users.js";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

async function connect() {
  await mongoose.connect(process.env.MONGODB_URL);
  console.log("connected to mongodb");
}

//middlewares
app.use(cookieParser());
app.use(express.json());

app.use("/auth", authRouth);
app.use("/hotels", hotelsRouth);
app.use("/users", usersRouth);
app.use("/rooms", roomsRouth);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "something went wrong";

  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
  nexr;
});

app.listen(8800, () => {
  connect().catch((err) => console.log(err));
  console.log("connected to backend");
});
