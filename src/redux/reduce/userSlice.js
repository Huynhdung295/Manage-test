import { createSlice } from "@reduxjs/toolkit";
const initUser = localStorage.getItem("user");
export const userSlice = createSlice({
  name: "user",
  initialState: {
    typeUser: initUser ? JSON.parse(initUser).typeUser : "",
    name: initUser ? JSON.parse(initUser).name : "",
    email: initUser ? JSON.parse(initUser).email : "",
    phone: initUser ? JSON.parse(initUser).phone : "",
    groupId: initUser ? JSON.parse(initUser).groupId : "",
    token: initUser ? JSON.parse(initUser).token : "",
  },
  reducers: {
    test: (state, action) => {
      state.test = action.payload;
    },
  },
});

export const { loginManage } = userSlice.actions;
export default userSlice.reducer;
