import { createSlice, configureStore } from "@reduxjs/toolkit";
import managementReducer from "./managementSlice";
import editManagementSlice from "./EditSlice";

const adderSlice = createSlice({
  name: "adder",
  initialState: {
    num: 99,
  },
  reducers: {
    increment: (state) => {
      state.num = state.num + 1;
    },
    decrement: (state) => {
      state.num = state.num - 1;
    },
    incrementByparam: (state, action) => {
      state.num = state.num + parseInt(action.payload);
    },
  },
});

export const { increment, decrement, incrementByparam } = adderSlice.actions;

export const store = configureStore({
  reducer: {
    counter: adderSlice.reducer,
    managementR: managementReducer,
    editManagementR: editManagementSlice,
  },
});
