const path = require("path");
const express = require("express");
const webpack = require("webpack");
const devMiddleware = require("webpack-dev-middleware");
const hotMiddleware = require("webpack-hot-middleware");
const PORT = process.env.PORT || 3000;
const DOMAIN = `localhost`;
const URL = `http://${DOMAIN}:${PORT}`;
const app = express();
const config = require("./webpack.config.js");
const compiler = webpack(config);
app.use(devMiddleware(compiler, {
  publicPath: config.output.publicPath,
  noInfo: true,
  stats: {
    colors: true,
    chunks: false
  },
  watchOptions: {
    aggregateTimeout: 1000,
    poll: true
  }
}));
app.use(hotMiddleware(compiler));
app.use("*", (req, res, next) => {
  const filename = path.join(compiler.outputPath, "index.html");
  compiler.outputFileSystem.readFile(filename, (err, result) => {
    if (err) {
      return next(err);
    }
    res.set("content-type", "text/html");
    res.send(result);
    res.end();
  })
});
app.listen(PORT, DOMAIN, err => {
  if (err) {
    throw new Error(err)
    return;
  }
  console.log(`[dev-server] Dev server listening at: ${URL}`)
});
