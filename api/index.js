import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();
dotenv.config();
import { notFound, errorHandler } from "../middleware/errorMiddleware.js";
const port = process.env.PORT || 5000;
import userRoutes from "../routes/userRoutes.js";
import taskRoutes from "../routes/taskRoutes.js";
import connectDb from "../config/db.js";

connectDb();
app.use(cors());
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRoutes);
app.use("/api/tasks", taskRoutes);

//error handeler
app.use(notFound);
app.use(errorHandler);

app.use("/", (req, res, next) => {
  res.status(200).json({
    message: "bad request",
  });
});

app.listen(port, () => {
  console.log(`server is runningss port ${port}`);
});
