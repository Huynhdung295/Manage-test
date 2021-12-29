import React from "react";
import { AdminRoute } from "./ListRoute";
import { Link, Switch, Route } from "react-router-dom";
function AdminRouter() {
  return (
    <div>
      <ul>
        {AdminRoute.map((route, index) => (
          <li key={index}>
            <Link to={route.path}>{route.label}</Link>
          </li>
        ))}
      </ul>
      <Switch>
        {AdminRoute.map((route, index) => (
          <Route key={index} path={route.path} render={() => route.component} />
        ))}
      </Switch>
    </div>
  );
}

export default AdminRouter;
