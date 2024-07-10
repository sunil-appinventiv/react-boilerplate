import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import authReducer from './slices/authSlice';
import movieReducer from "./slices/movieSlice";
import catsReducer from './slices/catsSlice';

// Configuration object for redux-persist
const persistConfig = {
  key: 'root',
  storage,
};

// Create a persisted reducer
const persistedAuthReducer = persistReducer(persistConfig, authReducer);

// Configure the store with the persisted reducer
const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    movieData: movieReducer,
    cats : catsReducer
    
  },
});

// Create a persistor
const persistor = persistStore(store);

export { store, persistor };
