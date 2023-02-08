const path = require("path");
const webpack = require("webpack");

module.exports = {
  // mode: defines el entorno para el cual estamos configurando el build  
  mode: "production",
  // entry: apuntas al archivo de entrada a la aplicación
  entry: "./src/index.js",
  // output: defines donde alojarás los archivos estáticos generados y puedes personalizar el nombre del archivo estático del js
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
  },
  // module rules: defines las configuraciones y reglas para la carga de las extensiones que tengan tus archivos
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
    ],
  },
  // devtool: es el inspector de recomendaciones y errores en la generación del build
  devtool: "source-map",
};
