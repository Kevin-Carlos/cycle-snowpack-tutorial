const path = require("path");

module.exports = ({
  entry: './server/index.ts',
  mode: "production",
  target: 'node',
  module: {
    rules: [
      {
        test: /\.(tsx|ts)?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              logInfoToStdOut: true,
              logLevel: 'info',
              allowTsInNodeModules: false,
              transpileOnly: true,
              configFile: "tsconfig.server.json"
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  output: {
    filename: "server.js",
    chunkFilename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/"
  }
});
