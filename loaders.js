const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;

const styledComponentsTransformer = createStyledComponentsTransformer();

const JSLoader = {
  test: /\.js(x)$/,
  use: {
    loader: 'babel-loader',
  },
  exclude: /node_modules/,
};

const TSLoader = {
  test: /\.tsx?$/,
  loader: 'ts-loader',
  options: {
    getCustomTransformers: () => ({ before: [styledComponentsTransformer]})
  },
  exclude: [
    new RegExp('.spec.tsx'),
    "/__snapshots__/",
    "/node_modules/",
  ],
}

module.exports = {
  JSLoader: JSLoader,
  TSLoader: TSLoader
}