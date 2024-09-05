// src/slices/activeTabSlice.js
// src/slices/activeTabSlice.js
import { createSlice } from '@reduxjs/toolkit';

const activeTabSlice = createSlice({
  name: 'activeTab',
  initialState: 0,
  reducers: {
    setActiveTab: (state, action) => action.payload,
  },
});

export const { setActiveTab } = activeTabSlice.actions;
export default activeTabSlice.reducer;
