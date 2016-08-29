/**
 * Created by quikr on 7/18/16.
 */

import express from "express";
import path from "path";
import open from "open";
import config from "../webpack/webpack.config.proddev";
import webpack from "webpack";


const port = 3003;
const app = express();
const compiler = webpack(config);

app.use(express.static(path.resolve(__dirname + '/../public/')));

/*webpack(config).run((err,stats) => {
 if (err) //Fatal error occured, abort now
 {
 console.log(err.bold.red);
 return 1;
 }
 });
 */
app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  }
  else {
    open(`http://localhost:${port}`);
  }


});

