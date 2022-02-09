import { configureStore } from "@reduxjs/toolkit";
import taskRedux from "./taskSlice";

export const store = configureStore({
  reducer: {
    tasks: taskRedux,
  },
});
