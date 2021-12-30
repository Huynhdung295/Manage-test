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
    logout: (state, action) => {
      // state.typeUser = "";
      // state.name = "";
      // state.email = "";
      // state.phone = "";
      // state.groupId = "";
      // state.token = "";
      localStorage.clear();
      window.location.reload();
    },
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
