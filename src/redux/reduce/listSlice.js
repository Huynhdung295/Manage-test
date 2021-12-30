import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
export const listSlice = createSlice({
  name: "listUser",
  initialState: {
    list: [],
    message: {
      content: "",
      message: "",
    },
  },
  reducers: {
    getListToReducer: (state, action) => {
      state.list.push(action.payload);
    },
    addUserFailedReducer: (state, action) => {
      state.message = action.payload;
      toast.error(state.message.message);
    },
    addUserSuscessReducer: (state, action) => {
      state.message = action.payload;
      toast.success(state.message.message);
    },
  },
});

export const { getListToReducer, addUserFailedReducer, addUserSuscessReducer } =
  listSlice.actions;
export default listSlice.reducer;
