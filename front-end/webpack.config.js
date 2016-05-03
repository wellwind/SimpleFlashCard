module.exports = {
    entry: {
        flashcard: "./app/flashcard.jsx"
    },
    output: {
        filename: "./scripts/app/[name].js"
    },
    module: {
        loaders: [{
            test: /\.js|\.jsx?$/,
            loader: "babel-loader",
            query: {
                presets: ["es2015", "react"]
            }
        }]
    },
    resolve: {
    extensions: ["", ".js", ".json", ".jsx"] 
  }
};