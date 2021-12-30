import React from "react";
import { Button, Form } from "react-bootstrap";
import { postToCreateUser } from "../api/api";
import { useDispatch } from "react-redux";
import {
  addUserFailedReducer,
  addUserSuscessReducer,
} from "../redux/reduce/listSlice";
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
            content: err,
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
        <Form.Group className="mb-3">
          <Form.Label>Account</Form.Label>
          <Form.Control
            value={dataUser?.account || ""}
            minLength="6"
            onChange={(e) => handleChange(`account`, e?.target?.value)}
            type="text"
            placeholder="Account..."
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            minLength="6"
            onChange={(e) => handleChange(`name`, e?.target?.value)}
            type="text"
            placeholder="Name..."
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            minLength="6"
            onChange={(e) => handleChange(`password`, e?.target?.value)}
            type="text"
            placeholder="Password..."
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            minLength="6"
            onChange={(e) => handleChange(`email`, e?.target?.value)}
            type="email"
            placeholder="Email..."
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            minLength="6"
            onChange={(e) => handleChange(`phone`, e?.target?.value)}
            pattern="^[0-9]*$"
            type="text"
            placeholder="Phone..."
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>ID Group</Form.Label>
          <Form.Control
            minLength="4"
            maxLength="4"
            onChange={(e) => handleChange(`idGroup`, e?.target?.value)}
            type="text"
            placeholder="ID Group..."
          />
        </Form.Group>
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
