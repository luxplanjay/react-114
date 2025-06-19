import { createSlice } from "@reduxjs/toolkit";
import { fetchTasks, addTask, deleteTask } from "./operations";
import { logOut } from "../auth/operations";
import type { Task } from "../../types/task";

interface TasksState {
  items: Task[];
  isLoading: boolean;
  error: boolean;
}

const initialState: TasksState = {
  items: [],
  isLoading: false,
  error: false,
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
        state.items = action.payload;
      })
      .addCase(fetchTasks.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      })
      .addCase(addTask.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
        state.items.push(action.payload);
      })
      .addCase(addTask.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      })
      .addCase(deleteTask.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
        const index = state.items.findIndex(
          (task) => task.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteTask.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.items = [];
        state.error = false;
      });
  },
});

export default tasksSlice.reducer;
