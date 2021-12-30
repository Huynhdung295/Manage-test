import React from "react";
import LoginHook from "../hook/LoginHook";
import { Button, Card, Form } from "react-bootstrap";

function LoginPage() {
  const { setParams, username, password, login } = LoginHook();
  return (
    <div className="d-flex justify-content-center">
      <Card style={{ width: "380px", position: 'fixed', top:'20%' }} className="text-center mb-0">
        <Card.Header style={{ fontSize: "22px" }}>Login</Card.Header>
        <Card.Body>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              login();
            }}
          >
            <div>
              <Form.Control
                className="mb-2"
                minLength="3"
                placeholder="Username"
                type="text"
                name="userName"
                value={username}
                onChange={setParams}
              />
            </div>
            <div>
              <Form.Control
                minLength="3"
                className="mb-2"
                placeholder="Password"
                type="password"
                name="password"
                value={password}
                onChange={setParams}
              />
            </div>
            <div>
              <Button type="submit" variant="outline-primary">
                Login
              </Button>
            </div>
          </form>
        </Card.Body>
        <Card.Footer className="text-muted"></Card.Footer>
      </Card>
    </div>
  );
}

export default LoginPage;
