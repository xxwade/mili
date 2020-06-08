import * as React from "react";

import { Link, Redirect, Route, BrowserRouter as Router, Switch } from "react-router-dom";

import loadable from "@loadable/component";
import { IRoute } from "./interface";

export const createRoutes = (routes: IRoute[]) => {
  return (
    <Router>
      <Switch>
        {routes.map(route => {
          const { path, component, redirect } = route;

          if (redirect) {
            return <Redirect to={redirect} key={path} />;
          }

          if (component) {
            const Page = loadable(component);

            return (
              <Route path={path} key={path}>
                <Page />
              </Route>
            );
          }

          return null;
        })}
      </Switch>
    </Router>
  );
};

export { Router, Switch, Route, Link };
