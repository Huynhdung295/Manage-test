import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { userSlice } from "../redux/reduce/userSlice";
function UserTemplate() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <>
      <Navbar
        sticky="top"
        style={{
          zIndex: "99",
          backgroundColor: "#fff",
          borderBottom: "2px solid",
          maxWidth: "100vw",
        }}
      >
        <Container fluid>
          <Navbar.Brand>Dashboard</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text style={{ marginRight: "10px" }}>
              Hello, {user?.name}
            </Navbar.Text>
            <Navbar.Text
              style={{
                cursor: "pointer",
                backgroundColor: "red",
                padding: "5px",
                color: "white",
              }}
              onClick={() => dispatch(userSlice.actions.logout())}
            >
              Logout
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <p>Chưa có tính năng gì cho bạn đâu, cho đăng nhập để cho bạn vui thôi :3 !!!</p>
    </>
  );
}

export default UserTemplate;
