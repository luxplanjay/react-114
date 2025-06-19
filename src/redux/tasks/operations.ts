import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import type { Task } from "../../types/task";

// GET @ /tasks
export const fetchTasks = createAsyncThunk("tasks/fetchAll", async () => {
  const res = await axios.get<Task[]>("/tasks");
  return res.data;
});

// POST @ /tasks
export const addTask = createAsyncThunk(
  "tasks/addTask",
  async (text: string) => {
    const response = await axios.post<Task>("/tasks", { text });
    return response.data;
  }
);

// DELETE @ /tasks/:id
export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async (taskId: string) => {
    const response = await axios.delete<Task>(`/tasks/${taskId}`);
    return response.data;
  }
);
