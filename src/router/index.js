import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "../page/LoginPage";
import { useSelector } from "react-redux";
import AdminTemplate from "../template/AdminTemplate";
import UserTemplate from "../template/UserTemplate";
function RouterMain() {
  const dataUser = useSelector((state) => state.user);
  console.log(dataUser?.typeUser === "QuanTri");
  console.log(dataUser);
  return (
    <Router>
      <Switch>
        <Route
          path="/"
          render={() =>
            dataUser?.typeUser === "QuanTri" ? (
              <AdminTemplate />
            ) : dataUser?.typeUser === "KhachHang" ? (
              <UserTemplate />
            ) : (
              <LoginPage />
            )
          }
        />
      </Switch>
    </Router>
  );
}

export default RouterMain;
