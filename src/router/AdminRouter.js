import React from "react";
import { AdminRoute } from "./ListRoute";
import { Switch, Route } from "react-router-dom";
import InfomartionUser from "../page/InfomartionUser";
function AdminRouter() {
  return (
    <div>
      <Switch>
        {AdminRoute.map((route, index) => (
          <Route
            exact
            key={index}
            path={route.path}
            render={() => route.component}
          />
        ))}
        <Route exact path="/" render={() => <InfomartionUser />} />
      </Switch>
    </div>
  );
}

export default AdminRouter;
