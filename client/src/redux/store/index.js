import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "../reducers/userReducers";
import articoliReducer from "../reducers/articoliReducers";
import carrelloReducer from "../reducers/carrelloReducers";
import ordiniReducer from "../reducers/ordiniReducers";

import { encryptTransform } from "redux-persist-transform-encrypt";

const persistConfig = {
  key: "root",
  storage,
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_KEY_SEGRATA_SEGRETA_PROPRIO_SEGRETA,
    }),
  ],
};

const rootReducer = combineReducers({
  user: userReducer,
  articolo: articoliReducer,
  carrello: carrelloReducer,
  ordine: ordiniReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
