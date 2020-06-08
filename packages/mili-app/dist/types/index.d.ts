declare type IRoute = {
  path: string;
  component?: () => Promise<any>;
  redirect?: string;
};

declare type IRoute$1 = IRoute;
interface IAppConfig {
  name?: string;
  rootElementId: string;
  routes: IRoute$1[];
}
declare const createApp: (config: IAppConfig) => void;

export { IAppConfig, IRoute$1 as IRoute, createApp };
