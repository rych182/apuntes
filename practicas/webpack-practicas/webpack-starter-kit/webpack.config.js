//Se pueden usar diferentes sintaxis en el USE
//Se exportan los pluggins porque es código de NODE JS
const HtmlWebpackPlugin = require("html-webpack-plugin"),
    MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    module: {
        rules: [{
                //acepta cualquier archivo js en mayúsculas y minúsculas
                test: /\.js$/i,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            { //Creo otra regla
                test: /\.html/i, //La i es para que acepte mayúsculas y minúsculas
                use: [{
                    loader: "html-loader",
                    options: {
                        minimize: true,

                    }
                }],
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            //el archivo en el cual se va a basar para generar el archivo final
            template: "./src/index.html",
            //como quiero que se llame el archivo en la carpeta de distribución
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin(),

    ]
};