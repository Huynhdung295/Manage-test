import { fetchJSON, postJSON } from "./method";

const API = "https://movienew.cybersoft.edu.vn/api";
export const postToLogin = (data) =>
  postJSON(`${API}/QuanLyNguoiDung/DangNhap`, data);
export const getListUser = (data) =>
  fetchJSON(
    `${API}/QuanLyNguoiDung/LayDanhSachNguoiDung?${
      data?.maNhom === "" ? "" : `&maNhom=${data?.maNhom}`
    }${
      data?.tuKhoa === "" ? "" : `&tuKhoa=${data?.tuKhoa}`
    }`
  );
export const postToCreateUser = (data) =>
  postJSON(`${API}/QuanLyNguoiDung/ThemNguoiDung`, data);
