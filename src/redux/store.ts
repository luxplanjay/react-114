import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import tasksReducer from "./tasks/slice";
// Тут була циклічна залежність, я не побачів.
// Це тому що ми імпортуємо в store.ts редюсер із slice.ts
// а в slice.ts типи із store.ts
// Виправив так шо створив redux/types.ts file і туди виніс типи RootState та AppDispatch
// Це можна було винести в папку types, не важливо, головне щоб два модулі не імпортували
// один одного
import authReducer from "./auth/slice";

const persistedAuthReducer = persistReducer(
  {
    key: "user-token",
    storage,
    whitelist: ["token"],
  },
  authReducer
);

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    auth: persistedAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
