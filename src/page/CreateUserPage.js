import React from "react";
import { Button, Form } from "react-bootstrap";
import { postToCreateUser } from "../api/api";
import { useDispatch } from "react-redux";
import {
  addUserFailedReducer,
  addUserSuscessReducer,
} from "../redux/reduce/listSlice";
import { dataCreateForm } from "../settings/CreateUserPage";
function CreateUserPage() {
  const dispatch = useDispatch();
  const [dataUser, setDataUser] = React.useState({});
  const handleChange = (key, value) =>
    setDataUser({ ...dataUser, [key]: value });
  const dataCreate = {
    taiKhoan: dataUser?.account,
    matKhau: dataUser?.password,
    hoTen: dataUser?.name,
    soDT: dataUser?.phone,
    email: dataUser?.email,
    maNhom: dataUser?.idGroup,
    maLoaiNguoiDung: dataUser?.type || "KhachHang",
  };
  const handleCreateUser = () => {
    postToCreateUser(dataCreate)
      .then((res) => {
        dispatch(
          addUserSuscessReducer({
            content: res?.content,
            message: "Thêm người dùng thành công",
          })
        );
      })
      .catch((err) => {
        dispatch(
          addUserFailedReducer({
            content: err?.content,
            message: "Dữ liệu không hợp lệ!",
          })
        );
      });
  };
  return (
    <>
      <h2>Create User</h2>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          handleCreateUser();
        }}
      >
        {dataCreateForm.map((item, index) => (
          <Form.Group key={index} className="mb-3">
            <Form.Label>{item.label}</Form.Label>
            <Form.Control
              minLength={item.min}
              onChange={(e) => handleChange(item.attr, e?.target?.value)}
              type={item.type}
              pattern={item.pattern === "" ? null : item.pattern}
              placeholder={item.placeholder}
            />
          </Form.Group>
        ))}
        <Form.Group className="mb-3">
          <Form.Label>Type</Form.Label>
          <Form.Select onChange={(e) => handleChange(`type`, e?.target?.value)}>
            <option value="KhachHang">KhachHang</option>
            <option value="QuanTri">QuanTri</option>
          </Form.Select>
        </Form.Group>
        <Button
          disabled={
            dataUser?.account === "" ||
            dataUser?.account === undefined ||
            dataUser?.password === "" ||
            dataUser?.password === undefined ||
            dataUser?.name === "" ||
            dataUser?.name === undefined ||
            dataUser?.phone === "" ||
            dataUser?.phone === undefined ||
            dataUser?.email === "" ||
            dataUser?.email === undefined ||
            dataUser?.idGroup === "" ||
            dataUser?.idGroup === undefined
          }
          type="submit"
        >
          Add User
        </Button>
      </Form>
    </>
  );
}

export default CreateUserPage;
