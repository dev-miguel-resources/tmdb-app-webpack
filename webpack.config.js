const path = require("path");
//const webpack = require("webpack"); // plugins

module.exports = {
  // mode: defines el entorno para el cual estamos configurando el build
  mode: "production", // none, // development, production
  // entry: apuntas al archivo de entrada a la aplicación
  entry: "./src/index.js",
  // output: defines donde alojarás los archivos estáticos generados y puedes personalizar el nombre del archivo estático del js
  output: {
    path: path.join(__dirname, "dist"), // tmdb-app-webpack/public
    filename: "build.js",
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
            },
          },
        ],
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
      /*{
        test: /\.json$/i,
        use: [
          "file-loader",
          {
            loader: "cson-loader"
          }
        ] 
      },*/
    ],
  },
  // plugins: son características que me permiten darle soporte a mi configuración con webpack
  /*plugins: [

  ],*/
  // resolve: es donde dejo registradas todas las extensiones que estoy resolviendo de cara al build
  resolve: {
    extensions: [".js", ".jsx", ".css", ".png"],
  },
  // me permite habilitar recomendaciones, manejo de errores, warnings, etc para añadir configuraciones y mejorar mi build en temas de performance
  performance: {
    hints: process.env.NODE_ENV === "production" ? "error" : false, // error (red), warning (yellow), false (no quieres que haga nada),
    // no quiere decir que para procesar los recursos tenga que ocupar todo la memoria del buffer disponible
    maxEntrypointSize: 580000, // el buffer de entrada de los archivos que se van a procesar para el build: js y css
    maxAssetSize: 580000, // el buffer de entrada para cada recurso que no sea js ni css
    /*assetFilter: function(assetFilename) { // sirve para excluir un recurso de la estimación del buffer, para no agregarlo al presupuesto
      return !assetFilename.endsWith('.jpg');
    },*/ 
  },
  // me permite crear y configurar un servidor proxy reverso para saber como se está comportando mi proyecto que se va ir a producción a partir del build
  devServer: {
    proxy: {
      "/api": { // habilitar una ruta de direccionamiento de este servidor proxy vs el de desarrollo
        target: "http://127.0.0.1:8080", // el puerto en el cual levantaremos el servidor proxy de webpack
        changeOrigin: true, // habilitar este ecosistema nuevo desde el origen específicado
        secure: false, // que no me pida ssl
        pathRewrite: { // toma el código del build para ese código levantarlo en el server proxy de webpack
          "^/api": "/api",
        }
      }
    },
    // doble check en caliente para verificar que las definiciones del performance se hayan gestionado correctamente para el dev-server
    hot: true,
    // static: define la ruta obsoluta para el directorio donde van a caer los recursos con sus importaciones correctamente, para que se reflejen bien en el dev-server
    static: path.resolve(__dirname, "public"), // c://bootcamp-mern/tmdb-app-webpack/public
  },
  //devtool: "eval-cheap-module-source-map", // inspector de mode development
  // devtool-source:map: es el inspector de recomendaciones y errores en la generación del build para producción
  devtool: "source-map",
};
