import React from "react";
import { AdminRoute } from "./ListRoute";
import { Switch, Route } from "react-router-dom";
import InfomartionUser from "../page/InfomartionUser";
import NotFound from "../page/NotFound";
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
        <Route path="/" exact render={() => <InfomartionUser />} />
        <Route path="" component={() => <NotFound />} />
      </Switch>
    </div>
  );
}

export default AdminRouter;
