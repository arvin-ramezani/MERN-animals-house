import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
// import counterReducer from "../features/counter/counterSlice";
import userReducer from "../features/user/userSlice";
// import cartReducer from "../features/cart/cartSlice";
import animalsReducer from "../features/animals/animalsSlice";

import {
  persistStore,
  // persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistCombineReducers from "redux-persist/es/persistCombineReducers";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistCombineReducers(persistConfig, {
  user: userReducer,
  animals: animalsReducer,
});

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
