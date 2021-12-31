import React from "react";
import { Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { dataInfoForm } from "../settings/InfomationPage";
function InfomartionUser() {
  const dataUser = useSelector((state) => state.user);
  return (
    <>
      <h2>Detail User</h2>
      {dataInfoForm(dataUser).map((item, index) => (
        <Form.Group key={index} className="mb-3">
          <Form.Label>{item?.label}</Form.Label>
          <Form.Control disabled placeholder={item?.content} />
        </Form.Group>
      ))}
    </>
  );
}

export default InfomartionUser;
