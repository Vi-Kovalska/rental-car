import { createSlice } from "@reduxjs/toolkit";
import { getBrands, getCarById, getCars } from "./operations";

const initialState = {
  items: [],
  loading: false,
  error: null,
  brands: [],
  carById: {},
  hasMore: true,
};

const handlePending = (state) => {
  state.loading = true;
  state.error = null;
};
const handleFulfilled = (state) => {
  state.loading = false;
  state.error = null;
};
const handleRejected = (state, { payload }) => {
  state.loading = false;
  if (payload === "ABORTED") {
    state.error = null;
  } else {
    state.error = payload?.message || "Something went wrong";
  }
};
const slice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    setCarByID: (state, { payload }) => {
      state.carById = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCars.pending, handlePending)
      .addCase(getCars.fulfilled, (state, { payload, meta }) => {
        handleFulfilled(state, payload);
        if (meta.arg.append) {
          state.items.push(...payload);
        } else {
          state.items = payload;
        }

        if (payload.length < meta.arg.limit) {
          state.hasMore = false;
        }
      })

      .addCase(getCars.rejected, handleRejected)
      .addCase(getBrands.pending, handlePending)
      .addCase(getBrands.fulfilled, (state, { payload }) => {
        handleFulfilled(state, payload);
        state.brands = payload;
      })

      .addCase(getBrands.rejected, handleRejected)
      .addCase(getCarById.pending, handlePending)
      .addCase(getCarById.fulfilled, (state, { payload }) => {
        handleFulfilled(state, payload);
        state.carById = payload;
      })
      .addCase(getCarById.rejected, handleRejected);
  },
});

export const carsReducer = slice.reducer;
