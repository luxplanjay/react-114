import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "balance",
  initialState: {
    value: 1000,
  },
  reducers: {
    deposit: (state, action) => {
      state.value += action.payload;
    },
    withdraw: (state, action) => {
      state.value -= action.payload;
    },
  },
});

// Action creators
export const { deposit, withdraw } = slice.actions;

// Slice reducer
export default slice.reducer;
