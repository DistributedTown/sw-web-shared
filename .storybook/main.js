const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  addons: [
    // "@storybook/manager-webpack5",
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, "../"),
    });

    // config.module.rules.push({
    //   test: /\.tsx?$/,
    //   use: "ts-loader",
    //   exclude: /node_modules/,
    // });

    // config.resolve.fallback = {
    //   crypto: false,
    //   path: require.resolve("path-browserify"),
    // };

    // config.resolve.extensions.push(".ts", ".tsx");

    // Return the altered config
    return config;
  },
};
