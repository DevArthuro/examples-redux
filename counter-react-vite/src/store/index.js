import { configureStore } from "@reduxjs/toolkit";
import counter from "./slices/counter";

export default configureStore({
  reducer: {
    counter,
  },
});
