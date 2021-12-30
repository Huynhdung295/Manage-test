import React from "react";
import { Form } from "react-bootstrap";
import { useSelector } from "react-redux";
function InfomartionUser() {
  const dataUser = useSelector((state) => state.user);
  return (
    <>
      <h2>Detail User</h2>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control disabled placeholder={dataUser?.name} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control disabled placeholder={dataUser?.email} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Phone</Form.Label>
        <Form.Control disabled placeholder={dataUser?.phone} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Group ID</Form.Label>
        <Form.Control disabled placeholder={dataUser?.groupId} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Type</Form.Label>
        <Form.Control disabled placeholder={dataUser?.typeUser} />
      </Form.Group>
    </>
  );
}

export default InfomartionUser;
