import { createSlice } from "@reduxjs/toolkit";
export const messageSlice = createSlice({
  name: "message",
  initialState: {
    adminLoginSuscess: "Bạn đã đăng nhập thành công với vai trò Quản trị viên",
    userLoginSuscess: "Bạn đã đăng nhập thành công với vai trò Người dùng",
    loginFailed: "Tài khoản hoặc mật khẩu không đúng",
  },
  reducers: {},
});

// export const {} = messageSlice.actions;
export default messageSlice.reducer;
