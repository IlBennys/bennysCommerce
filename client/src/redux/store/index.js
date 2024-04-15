import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "../reducers/userReducers";
import articoliReducer from "../reducers/articoliReducers";
import carrelloReducer from "../reducers/carrelloReducers";
import ordiniReducer from "../reducers/ordiniReducers";
import { encryptTransform } from "redux-persist-transform-encrypt";
import pagamentoReducer from "../reducers/pagamentoReducers";
import { PAUSE } from "redux-persist";

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
  pagamento: pagamentoReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
