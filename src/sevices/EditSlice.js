import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getData } from "./managementSlice";

export const editGetData = createAsyncThunk("editGetData", async (obj) => {
  return fetch(`https://61292da4068adf001789b801.mockapi.io//role/${obj}`).then(
    (response) => {
      return response.json();
    }
  );
});

export const editpostData = createAsyncThunk(
  "editPostData",
  async (obj, { dispatch }) => {
    return fetch(
      `https://61292da4068adf001789b801.mockapi.io//role/${obj.id}`,
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      }
    ).then((resp) => {
      dispatch(getData());
      return resp.json();
    });
  }
);

const editManagementSlice = createSlice({
  name: "Edit",
  initialState: {
    data: {},
    isLoading: false,
    isRejected: false,
  },

  extraReducers: {
    [editGetData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    [editGetData.pending]: (state) => {
      state.isRejected = false;
      state.isLoading = true;
    },
    [editGetData.rejected]: (state) => {
      state.isLoading = false;
      state.isRejected = true;
    },
    [editpostData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      alert("edited sucessfuly...................");
    },
    [editpostData.rejected]: (state) => {
      alert("rejected");
    },
  },
});

export default editManagementSlice.reducer;
