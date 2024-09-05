// src/slices/imagesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const imagesSlice = createSlice({
  name: 'images',
  initialState: [],
  reducers: {
    addImages: (state, action) => {
      return [...state, ...action.payload];
    },
  },
});

export const { addImages } = imagesSlice.actions;
export default imagesSlice.reducer;
