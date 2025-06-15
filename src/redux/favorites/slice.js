import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};
const slice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const id = action.payload;
      const index = state.items.indexOf(id);
      if (index >= 0) {
        state.items.splice(index, 1);
      } else {
        state.items.push(id);
      }
    },
    clearFavorites: () => [],
  },
});
export const { toggleFavorite } = slice.actions;
export const favoritesReducer = slice.reducer;
