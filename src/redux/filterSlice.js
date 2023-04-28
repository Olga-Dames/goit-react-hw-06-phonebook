import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setStatusFilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const { setStatusFilter } = filterSlice.actions;
export default filterSlice.reducer;
