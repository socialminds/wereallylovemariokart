module.exports = {
  context: `${__dirname}/src`,
  entry: "./app.js",
  output: {
    path: `${__dirname}/dist`,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015"]
        }
      }
    ]
  }
};
