import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 1,
  limit: 8,
  filters: {
    brand: "",
    rentalPrice: "",
    minMileage: "",
    maxMileage: "",
  },
};

const slice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilters: (state, action) => {
      state.filters = action.payload;
      state.page = 1;
    },
  },
});

export const {
  resetCars,
  setFilters,
  setBrand,
  setRentalPrice,
  setMinMileage,
  setMaxMileage,
} = slice.actions;
export const filterReducer = slice.reducer;
