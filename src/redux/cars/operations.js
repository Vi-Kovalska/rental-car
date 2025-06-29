import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = "https://car-rental-api.goit.global";

export const getCars = createAsyncThunk(
  "cars/getAll",
  async ({ page = 1, limit = 8, filters = {}, append, signal }, thunkAPI) => {
    const { brand, rentalPrice, minMileage, maxMileage } = filters;
    try {
      const params = {
        page,
        limit,
        brand,
        rentalPrice,
        minMileage,
        maxMileage,
      };

      const { data } = await axios.get("/cars", {
        params,
        signal,
      });

      return data.cars || data;
    } catch (error) {
      if (axios.isCancel(error) || error.name === "CanceledError") {
        return thunkAPI.rejectWithValue("ABORTED");
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCarById = createAsyncThunk(
  "cars/getCarById",
  async ({ id, signal }, thunkAPI) => {
    try {
      const { data } = await axios.get(`/cars/${id}`, { signal });
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
