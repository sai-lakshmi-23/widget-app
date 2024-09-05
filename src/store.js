// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import imagesReducer from './slices/imagesSlice';
import activeTabReducer from './slices/activeTabSlice';

export const store = configureStore({
  reducer: {
    images: imagesReducer,
    activeTab: activeTabReducer,
  },
});
