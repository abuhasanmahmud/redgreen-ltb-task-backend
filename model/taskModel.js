import mongoose from "mongoose";

const taskSchema = mongoose.Schema(
  {
    issue: {
      type: String,
      required: true,
    },
    des: {
      type: String,
      required: true,
    },
    section: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model("Task", taskSchema);
export default Task;
