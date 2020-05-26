const { declare } = require("@babel/helper-plugin-utils");

module.exports = declare((api, opt = {}) => {
  api.assertVersion(7);
  const web = api.caller(isWebTarget);
  const plugins = [
    require("@babel/plugin-syntax-dynamic-import"),
    "@loadable/babel-plugin"
  ];
  const presets = [
    require("babel-preset-react-app"),
  ];
  if (api.env(["development", "production"])) {
    plugins.push(
      require("babel-plugin-lodash"),
      [
        require("babel-plugin-import"),
        {
          libraryName: "antd",
          libraryDirectory: "lib",
          style: "css",
        },
        "antd",
      ],
      [
        require("babel-plugin-import"),
        {
          libraryName: "date-fns",
          libraryDirectory: "",
          camel2DashComponentName: false,
        },
        "date-fns",
      ],
    );
  }
  
  if (api.env("development") && web) {
    plugins.push(require("react-hot-loader/babel"));
  }
  if (api.env("test")) {
    plugins.push(require("babel-plugin-dynamic-import-node"));
  }
  return { plugins, presets };
});
