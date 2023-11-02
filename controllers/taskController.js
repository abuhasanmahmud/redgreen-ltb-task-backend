import Task from "../model/taskModel.js";

const createTask = async (req, res) => {
  try {
    const { issue, des, section } = req.body;
    const task = await Task.create({ issue, des, section });
    res.status(200).json({ task });
  } catch (error) {
    console.log("error", error);
  }
};

const allTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json({ tasks: tasks });
  } catch (error) {
    console.log("error", error);
  }
};

const deleteTask = async (req, res) => {
  // console.log(req.params.id, "id");
  try {
    const id = req.params.id;
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).send("Task not found");
    }
    const taskRes = await Task.findByIdAndDelete(id);
    res.status(200).json({ message: "Task Delete Successfully" });
  } catch (error) {
    console.log("errors", error);
    res.status(404).send(error.message);
  }
};

const updateTask = async (req, res) => {
  // console.log("click updatae", req.params.id);
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.send({ message: "Task not found" });
    }

    // handleProductStock(product);
    task.issue = req.body.issue;
    task.section = req.body.section;
    task.des = req.body.des;
    await task.save();
    res.send({ data: task, message: "task updated successfully!" });
  } catch (err) {
    res.status(404).send(err.message);
    console.log("err", err);
  }
};

export { createTask, allTasks, deleteTask, updateTask };
