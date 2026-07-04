const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
      meta: {
        "og:title": {
          property: "og:title",
          content: "Imannn | Bellooo! Welcome to my PortFolio.",
        },
        "og:description": {
          property: "og:description",
          content:
            "IT studs, fsdjfowijfpek 4040 error!",
        },
        "og:image": {
          property: "og:image",
          content:
            "https://github.com/mantrvt/my-fortpolio/blob/main/src/assets/img/homepage.png?raw=true",
        },
        "og:url": {
          property: "og:url",
          content: "",
        },
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            targets: "defaults",
            presets: [["@babel/preset-env"]],
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.pdf$/,
        use: "file-loader",
      },
    ],
  },
};
