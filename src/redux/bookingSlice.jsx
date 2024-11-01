// src/redux/bookingSlice.jsx

import { createSlice } from '@reduxjs/toolkit';

const bookingSlice = createSlice({
  name: 'booking',
  initialState: {
    checkInDate: null,
    checkOutDate: null,
    numberOfRooms: 1,
    numberOfGuests: 1,
  },
  reducers: {
    setCheckInDate: (state, action) => {
      state.checkInDate = action.payload;
     },
    setCheckOutDate: (state, action) => {
      state.checkOutDate = action.payload;
    },
    setNumberOfRooms: (state, action) => {
      state.numberOfRooms = action.payload;
    },
    setNumberOfGuests: (state, action) => {
      state.numberOfGuests = action.payload;
    },
  },
});

export const { setCheckInDate, setCheckOutDate, setNumberOfRooms, setNumberOfGuests } = bookingSlice.actions;
export default bookingSlice.reducer;
