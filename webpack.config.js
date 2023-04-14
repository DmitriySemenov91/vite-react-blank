const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

let mode = "development";
let target = "web";

const plugins = [
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin(),
  new HtmlWebpackPlugin({
    template: "./src/index.html",
  }),
];

if (process.env.NODE_ENV === "production") {
  mode = "production";
  // Temporary workaround for 'browserslist' bug that is being patched in the near future
  target = "browserslist";
}

if (process.env.SERVE) {
  // We only want React Hot Reloading in serve mode
  plugins.push(new ReactRefreshWebpackPlugin());
}

module.exports = [
  {
    // mode defaults to 'production' if not set
    mode: mode,

    entry: "./src/index.tsx",

    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
      assetModuleFilename: "assets/images/[hash][ext][query]",
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-typescript",
              ],
              cacheDirectory: true,
            },
          },
        },
        {
          test: /\.(s[ac]|c)ss$/i,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              // This is required for asset imports in CSS, such as url()
              options: { publicPath: "" },
            },
            "style-loader",
            "css-loader",
            "postcss-loader",
            // according to the docs, sass-loader should be at the bottom, which
            // loads it first to avoid prefixes in your sourcemaps and other issues.
            "sass-loader",
          ],
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          /**
           * The `type` setting replaces the need for "url-loader"
           * and "file-loader" in Webpack 5.
           *
           * setting `type` to "asset" will automatically pick between
           * outputing images to a file, or inlining them in the bundle as base64
           * with a default max inline size of 8kb
           */
          type: "asset",

          /**
           * If you want to inline larger images, you can set
           * a custom `maxSize` for inline like so:
           */
          // parser: {
          //   dataUrlCondition: {
          //     maxSize: 30 * 1024,
          //   },
          // },
        },
      ],
    },

    plugins: plugins,

    target: target,

    resolve: {
      extensions: [".tsx", ".ts", ".js", ".jsx"],
    },
    // required if using webpack-dev-server
    devServer: {
      static: {
        directory: path.join(__dirname, "./dist"),
      },
      hot: true,
      compress: true,
      port: 3010, // default 8000
    },
  },
];
