import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers } from 'redux';

// Persist configuration
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['users'], // Only persist the users slice
};

const rootReducer = combineReducers({
  users: persistReducer(persistConfig, userReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disables the serializableCheck for non-serializable values like AsyncStorage
    }),
});

export const persistor = persistStore(store);
