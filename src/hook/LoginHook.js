import { useState } from "react";
import { postToLogin } from "../api/api";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
function LoginHook() {
  const message = useSelector((state) => state.message);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const setParams = (e) => {
    if (e?.target?.name === "userName") {
      setUsername(e.target.value);
    }
    if (e?.target?.name === "password") {
      setPassword(e.target.value);
    }
  };
  const login = () => {
    const user = {
      taiKhoan: username,
      matKhau: password,
    };
    postToLogin(user)
      .then((res) => {
        const dataUser = res?.content;
        const typeUser = res?.content?.maLoaiNguoiDung;
        const dataUserLogin = {
          typeUser: typeUser,
          name: dataUser?.hoTen,
          email: dataUser?.email,
          phone: dataUser?.soDT,
          groupId: dataUser?.maNhom,
          token: dataUser?.accessToken,
        };
        if (res?.statusCode === 200) {
          localStorage.setItem("user", JSON.stringify(dataUserLogin));
          setTimeout(() => {
            window.location.assign("/");
          }, 1500);
          if (typeUser === "QuanTri") {
            toast.success(message?.adminLoginSuscess);
          }
          if (typeUser !== "QuanTri") {
            toast.success(message?.userLoginSuscess);
          }
        }
      })
      .catch((err) => {
        toast.error(message?.loginFailed);
      });
  };
  return { setParams, username, password, login };
}

export default LoginHook;
