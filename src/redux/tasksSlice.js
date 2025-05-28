import { createSlice, createSelector } from "@reduxjs/toolkit";
import { addTask, deleteTask, fetchTasks, toggleCompleted } from "./tasksOps";
import { selectTextFilter } from "./filtersSlice";

const slice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
    loading: false,
    error: false,
    a: 5,
    b: 10,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchTasks.rejected, (state) => {
        state.error = true;
      })
      .addCase(deleteTask.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      })
      .addCase(addTask.pending, (state) => {
        state.loading = true;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(toggleCompleted.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(toggleCompleted.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.map((item) => {
          if (item.id === action.payload.id) {
            return action.payload;
          }
          return item;
        });
      }),
});

export default slice.reducer;

// Прості селектори - повертають стан
export const selectTasks = (state) => state.tasks.items;

// Складний селектор - повертає обчислення
// export const selectVisibleTasks = (state) => {
//   console.log("selectVisibleTasks");
//   const tasks = selectTasks(state);
//   const textFilter = selectTextFilter(state);

//   return tasks.filter((task) =>
//     task.text.toLowerCase().includes(textFilter.toLowerCase())
//   );
// };

export const selectVisibleTasks = createSelector(
  [selectTasks, selectTextFilter],
  (tasks, textFilter) => {
    console.log("selectVisibleTasks");
    return tasks.filter((task) =>
      task.text.toLowerCase().includes(textFilter.toLowerCase())
    );
  }
);

// export const selectTaskCount = (state) => {
//   const tasks = selectTasks(state);

//   return tasks.reduce(
//     (acc, task) => {
//       if (task.completed) {
//         acc.completed += 1;
//       } else {
//         acc.active += 1;
//       }
//       return acc;
//     },
//     { active: 0, completed: 0, total: tasks.length }
//   );
// };

export const selectTaskCount = createSelector([selectTasks], (tasks) => {
  console.log("selectTaskCount");
  return tasks.reduce(
    (acc, task) => {
      if (task.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    },
    { active: 0, completed: 0, total: tasks.length }
  );
});
