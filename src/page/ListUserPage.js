/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Button, Col, Form, Row, Spinner, Table } from "react-bootstrap";
import { toast } from "react-toastify";
import { getListUser } from "../api/api";
import PaginationHook from "../hook/PaginationHook";
// import { useDispatch, useSelector } from "react-redux";
// import listSlice, { getListToReducer } from "../redux/reduce/listSlice";

function ListUserPage() {
  // const listUser = useSelector((state) => state.list.list);
  // console.log(listUser);
  // const dispatch = useDispatch();
  const [idGroup, setIdGroup] = React.useState("");
  const [keyword, setKeyword] = React.useState("");
  const [dataList, setDataList] = React.useState([]);

  const {
    newArray,
    controlPagination,
    pagination,
    page,
    sizePage,
    setSizePage,
    setPage,
  } = PaginationHook(dataList);
  const [isLoading, setIsLoading] = React.useState(true);
  const data = {
    maNhom: idGroup,
    tuKhoa: keyword,
  };
  useEffect(() => {
    getListUser(data)
      .then((res) => {
        setDataList(res?.content);
        setIsLoading(false);
        // dispatch(getListToReducer(res?.content));
      })
      .catch((err) => {
        setIsLoading(false);
        toast.error("Không lấy được danh sách người dùng");
      });
    return () => {
      setDataList([]);
      setKeyword("");
      setIdGroup("");
      setSizePage(30);
      setPage(1);
    };
  }, []);

  const handleSubmit = () => {
    setIsLoading(true);
    getListUser(data)
      .then((res) => {
        setDataList(res?.content);
        setIsLoading(false);
      })
      .catch((err) => {
        setDataList([]);
        toast.error("Mã nhóm không hợp lệ!");
        setIsLoading(false);
      });
  };
  return (
    <>
      <h2>List User</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setPage(1);
          handleSubmit();
        }}
      >
        <Row className="g-2">
          <Col style={{ maxWidth: "150px" }}>
            <Form.Control
              onChange={(e) => setIdGroup(e?.target?.value)}
              type="text"
              placeholder="ID Group"
            />
          </Col>
          <Col style={{ maxWidth: "300px" }}>
            <Form.Control
              onChange={(e) => setKeyword(e?.target?.value)}
              type="text"
              placeholder="Search..."
            />
          </Col>
          <Col>
            <Button type="submit">Search</Button>
          </Col>
        </Row>
      </form>
      <Row style={{ alignItems: "center", height: "70px" }}>
        <Col style={{ maxWidth: "100px" }}>{controlPagination}</Col>
        <Col style={{ maxWidth: "calc(100% - 100px)" }}>{pagination}</Col>
      </Row>

      {!isLoading ? (
        <div style={{ maxWidth: "100%", overflowX: "auto" }}>
          <Table style={{}} striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Account</th>
                <th>Password</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {newArray[page - 1]?.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1 + (page - 1) * sizePage}</td>
                  <td>{item.hoTen}</td>
                  <td>{item.taiKhoan}</td>
                  <td>{item.matKhau}</td>
                  <td>{item.email}</td>
                  <td>{item.soDT}</td>
                  <td>{item.maLoaiNguoiDung}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      ) : (
        <Spinner animation="border" variant="primary" />
      )}
    </>
  );
}

export default ListUserPage;
