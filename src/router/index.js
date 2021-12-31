import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "../page/LoginPage";
import { useSelector } from "react-redux";
import AdminTemplate from "../template/AdminTemplate";
import UserTemplate from "../template/UserTemplate";
import NotFound from "../page/NotFound";
function RouterMain() {
  const dataUser = useSelector((state) => state.user);
  const condition = (component) =>
    // eslint-disable-next-line no-unused-expressions
    dataUser?.typeUser === "QuanTri" ? (
      <AdminTemplate />
    ) : dataUser?.typeUser === "KhachHang" ? (
      <UserTemplate />
    ) : (
      component
    );

  return (
    <Router>
      <Switch>
        <Route exact path="/dangnhap" render={() => condition(<LoginPage />)} />
        <Route path="/" render={() => condition(<NotFound />)} />
      </Switch>
    </Router>
  );
}

export default RouterMain;
