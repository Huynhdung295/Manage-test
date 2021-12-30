/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Form, Pagination } from "react-bootstrap";

function PaginationHook(array) {
  const [newArray, setNewArray] = React.useState([]);
  const [sizePage, setSizePage] = React.useState(30);
  const [page, setPage] = React.useState(1);
  const chunkArray = (myArray, size) => {
    let results = [];
    while (myArray.length) {
      results.push(myArray.splice(0, size));
    }
    return results;
  };
  // Pagination
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
  const pagination = (
    <Pagination style={{ overflow: "auto" }} className="mt-2 mb-2">
      {items}
    </Pagination>
  );
  // Control Pagination
  const controlPagination = (
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
  );
  const arrayChunk = [...array];
  useEffect(() => {
    setNewArray(chunkArray(arrayChunk, sizePage));
  }, [array, sizePage]);

  return {
    newArray,
    controlPagination,
    pagination,
    sizePage,
    page,
    setSizePage,
    setPage,
  };
}

export default PaginationHook;
