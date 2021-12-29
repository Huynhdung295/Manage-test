import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reduce/userSlice";
import messageSlice from "./reduce/messageSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    message: messageSlice,
  },
});

export default store;
