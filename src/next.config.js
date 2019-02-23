const path = require("path");
const webpack = require("webpack");
const { withPlugins } = require("next-compose-plugins");
const appConfig = require("./app.config");

const config = {
  ...appConfig,

  webpack(config, { dev }) {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      ...config.node,
      fs: "empty"
    };

    return config;
  }
};

module.exports = withPlugins(
  [
    // Your plugins here
  ],
  config
);
