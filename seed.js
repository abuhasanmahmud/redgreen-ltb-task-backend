import dotenv from "dotenv";
dotenv.config();
import connectDb from "./config/db.js";

connectDb();
const importData = async () => {
  try {
    console.log("data inserted successfully!");
    process.exit();
  } catch (error) {
    console.log("error", error);
    process.exit(1);
  }
};

importData();
