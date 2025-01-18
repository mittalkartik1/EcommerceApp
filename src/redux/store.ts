import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import productsReducer from './reducers/productsReducer';
import cartReducer from './reducers/cartReducer';
import reduxSagas from './sagas';
import { persistStore, persistReducer, FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'cart',
  version: 1,
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, cartReducer);

const rootReducer = combineReducers({
  products: productsReducer,
  cart: persistedReducer,
});

const sagaMiddleWare = createSagaMiddleware();
export const store = configureStore({
  reducer: rootReducer,
  middleware:  (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(sagaMiddleWare),
});
sagaMiddleWare.run(reduxSagas);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>
export const getReduxState = () => store.getState();
export type AppDispatch = typeof store.dispatch;
