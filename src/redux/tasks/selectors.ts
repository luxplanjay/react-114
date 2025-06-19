import type { RootState } from "../store";

export const selectLoading = (state: RootState) => state.tasks.isLoading;

export const selectAllTasks = (state: RootState) => state.tasks.items;

export const selectIsError = (state: RootState) => state.tasks.error;
