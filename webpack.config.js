var path = require('path');

module.exports = {
    entry: path.join(__dirname,'./src/components/index.tsx'),
    output: {
        filename: "bundle.js",
        publicPath: 'dist',
        path: path.join(__dirname,'dist')
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "ts-loader" },
        ]
    },
};