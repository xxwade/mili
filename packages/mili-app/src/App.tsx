import * as React from "react";

import { IRoute } from "./interface";
import { createRoutes } from "./router";

interface IProp {
  name?: string;
  routes: IRoute[];
}

function App(props: IProp) {
  const { name, routes } = props;
  const appNamespace = name ? `app-${name}` : "app";

  return <div className={appNamespace}>{createRoutes(routes)}</div>;
}

export default App;
