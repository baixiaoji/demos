const path = require("path");
const NotifyPlugin = require('./plugins/notify.js');

module.exports = {
    mode: "development",
    entry: {
        main: "./src/index.js",
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: path.resolve(__dirname, "./loaders/replaceloader.js"),
                    options: {
                        name: "Sara",
                    },
                },
            },
        ],
    },
    plugins: [
        new NotifyPlugin((stats) => {
            console.log("it's done\n"+ stats)
            console.log('-------------');
            
        }, (err) => {
            console.log(err);
        })
    ],
}