import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "task",
  initialState: {
    tasks: ["todo"],
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks = [...state.tasks, action.payload];
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task !== action.payload);
    },
  },
});

export const { addTask, removeTask } = counterSlice.actions;
