/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import {
  Button,
  Col,
  Form,
  Pagination,
  Row,
  Spinner,
  Table,
} from "react-bootstrap";
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
  const [sizePage, setSizePage] = React.useState(30);
  const [page, setPage] = React.useState(1);
  const { newArray } = PaginationHook(dataList, sizePage);
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

  let items = [];
  for (let number = 1; number <= newArray?.length; number++) {
    items.push(
      <Pagination.Item
        key={number}
        onClick={() => setPage(number)}
        active={number === page}
      >
        {number}
      </Pagination.Item>
    );
  }
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
        <Col style={{ maxWidth: "100px" }}>
          <Form.Select
            onChange={(e) => {
              setSizePage(e?.target?.value);
              setPage(1);
            }}
          >
            <option value="30">30</option>
            <option value="50">50</option>
            <option value="70">70</option>
            <option value="100">100</option>
          </Form.Select>
        </Col>
        <Col style={{ maxWidth: "calc(100% - 100px)" }}>
          <Pagination style={{ overflow: "auto" }} className="mt-2 mb-2">
            {items}
          </Pagination>
        </Col>
      </Row>

      {!isLoading ? (
        <Table
          className="d-block"
          style={{
            maxWidth: "fit-content",
            margin: "0 auto",
            overflowX: "auto",
            whiteSpace: "nowrap",
          }}
          striped
          bordered
          hover
        >
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
                <td>{index + 1 + (page - 1) * 10}</td>
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
      ) : (
        <Spinner animation="border" variant="primary" />
      )}
    </>
  );
}

export default ListUserPage;
