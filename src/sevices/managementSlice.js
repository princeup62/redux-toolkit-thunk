import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getData = createAsyncThunk("getData/getData", async () => {
  return fetch("https://61292da4068adf001789b801.mockapi.io//role").then(
    (response) => response.json()
  );
});

const managementSlice = createSlice({
  name: "management",
  initialState: {
    list: [],
    isLoading: false,
    isRejected: false,
  },
  extraReducers: {
    [getData.fulfilled]: (state, action) => {
      state.list = action.payload;
      state.isLoading = false;
    },
    [getData.pending]: (state) => {
      state.isLoading = true;
    },
    [getData.rejected]: (state) => {
      state.isLoading = false;
      state.isRejected = true;
    },
  },
});

export default managementSlice.reducer;
