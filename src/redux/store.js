import { configureStore } from "@reduxjs/toolkit";
import balanceReducer from "./balanceSlice";
import localeReducer from "./localeSlice";

// '@@INIT'
// rootReducer(undefined, '@@INIT')
// rootReducer(initialState, '@@INIT')
// return initialState;

export const store = configureStore({
  reducer: {
    balance: balanceReducer,
    locale: localeReducer,
  },
});
