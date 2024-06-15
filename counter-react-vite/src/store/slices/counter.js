import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increase: (state, _) => {
      state.count += 1;
    },
    decrease: (state, _) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
});

export default counterSlice.reducer;

export const { increase, decrease, reset, incrementByAmount } =
  counterSlice.actions;

export const selectCounter = (state) => state.counter.count;
