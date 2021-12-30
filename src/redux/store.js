import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reduce/userSlice";
import messageSlice from "./reduce/messageSlice";
import listSlice from "./reduce/listSlice";
const store = configureStore({
  reducer: {
    user: userSlice,
    message: messageSlice,
    list: listSlice,
  },
});

export default store;
