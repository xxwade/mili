import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { IRoute as IRouteAlias } from "./interface";

export type IRoute = IRouteAlias;

export interface IAppConfig {
  name?: string;
  rootElementId: string;
  routes: IRoute[];
}
export const createApp = (config: IAppConfig) => {
  const { rootElementId, routes, name } = config;

  ReactDOM.render(
    <React.StrictMode>
      <App routes={routes} name={name} />
    </React.StrictMode>,
    document.getElementById(rootElementId),
  );
};
