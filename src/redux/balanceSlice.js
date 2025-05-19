import { createAction } from "@reduxjs/toolkit";

// Фабрика екшенів (функція яка створює об'єкти)
export const deposit = createAction("balance/deposit");

export const withdraw = createAction("balance/withdraw");

const initialState = {
  value: 1000,
};

export default function balanceReducer(state = initialState, action) {
  console.log("balanceReducer", action);

  switch (action.type) {
    case "balance/deposit":
      return {
        ...state,
        value: state.value + action.payload,
      };

    case "balance/withdraw":
      return {
        ...state,
        value: state.value - action.payload,
      };

    default:
      return state;
  }
}
