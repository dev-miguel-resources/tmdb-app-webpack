const path = require("path");
//const webpack = require("webpack"); // plugins

module.exports = {
  // mode: defines el entorno para el cual estamos configurando el build  
  mode: "production", // none, // development, production
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
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      /*{
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },*/
      {
        test: /\.(gif|png|jpe?g)$/i,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              bypassOnDebug: true, // primero, leerá el recurso y verá si es un recurso seguro y lo sanitiza
              disable: true, // no lea el recurso de forma inmediata
            }
          }
        ] 
      },
      /*{
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
      /*{
        test: /\.pdf$/i,
        use: [
          "file-loader",
          {
            loader: "pdf-loader"
          }
        ] 
      },
      /*{
        test: /\.txt$/i,
        use: [
          "file-loader",
          {
            loader: "raw-loader"
          }
        ] 
      },*/
    ],
  },
  // plugins: son características que me permiten darle soporte a mi configuración con webpack
  plugins: [

  ],
  // resolve: es donde dejo registradas todas las extensiones que estoy resolviendo de cara al build
  resolve: {

  },
  // me permite habilitar recomendaciones, manejo de errores, warnings, etc para añadir configuraciones y mejorar mi build en temas de performance
  performance: {

  },
  // me permite crear y configurar un servidor proxy reverso para saber como se está comportando mi proyecto que se va ir a producción a partir del build
  devServer: {

  },
  // devtool: es el inspector de recomendaciones y errores en la generación del build
  // devtool development
  //devtool: "eval-cheap-module-source-map",
  devtool: "source-map",
  // hot:
  // static paths:
};
