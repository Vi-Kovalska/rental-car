import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = "https://car-rental-api.goit.global";

export const getCars = createAsyncThunk(
  "cars/getAll",
  async ({ signal }, thunkAPI) => {
    try {
      const { data } = await axios.get("/cars", { signal });
      return data.cars;
    } catch (error) {
      if (error.name === "CanceledError") {
        return thunkAPI.rejectWithValue("ABORTED");
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCarById = createAsyncThunk(
  "cars/getCarById",
  async ({ id }, thunkAPI) => {
    try {
      const { data } = await axios.get(`/cars/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getBrands = createAsyncThunk(
  "cars/getBrands",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/brands");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
