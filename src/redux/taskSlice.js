import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "task",
  initialState: {
    tasks: [],
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks = [...state.tasks, action.payload];
    },
    removeTask: () => {},
  },
});
