import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://62584f320c918296a49543e7.mockapi.io";

export const fetchTasks = createAsyncThunk("tasks/getAll", async () => {
  const res = await axios.get("/tasks");
  return res.data;
});

export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async (taskId) => {
    const res = await axios.delete(`/tasks/${taskId}`);
    return res.data;
  }
);

export const addTask = createAsyncThunk("tasks/createTask", async (newTask) => {
  const res = await axios.post("/tasks", newTask);
  return res.data;
});

export const toggleCompleted = createAsyncThunk(
  "tasks/toggleCompleted",
  async (task) => {
    const res = await axios.put(`/tasks/${task.id}`, {
      completed: !task.completed,
    });
    return res.data;
  }
);
