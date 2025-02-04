const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "[name][ext]",
    clean: true, // Очищает папку dist перед сборкой
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/, // Добавил поддержку .ts файлов
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|svg|gif|webp)$/,
        type: "asset/resource",
      },
      {
        test: /\.pdf$/,
        type: "asset/resource",
        generator: {
          filename: "files/[name].[hash:8][ext]",
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"], // Добавил .ts для совместимости с TypeScript
    alias: {
      "@shared": path.resolve(__dirname, "src/shared"),
      "@components": path.resolve(__dirname, "src/components"),
      "@": path.resolve(__dirname, "src"), // Общий алиас для корневой директории
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Управление выходными данными",
      template: "./src/index.html",
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    hot: true,
    port: 5009,
    historyApiFallback: true, // Перенаправляет все запросы на index.html
  },
  mode: process.env.NODE_ENV === "production" ? "production" : "development", // Определение режима
};
