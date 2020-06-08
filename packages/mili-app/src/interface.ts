export type IRoute = {
  path: string;
  component?: () => Promise<any>;
  redirect?: string;
};
