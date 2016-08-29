/**
 * Created by quikr on 7/18/16.
 */
import webpack from "webpack";
import webpackConfig from "../webpack/webpack.config.prod";

process.env.NODE_ENV = 'production';

//setup webpack for dev, console messaging..
console.log("hey");
console.log('Generating minified bundle via webpack, this might take a while');

//error loggin
webpack(webpackConfig).run((err, stats) => {
  if (err) //Fatal error occured, abort now
  {
    console.log(err.bold.red);
    return 1;
  }
  console.log("Building...");
  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {//display errors
    console.log('Webpack has generated the following warnings: '.bold.yellow);
    jsonStats.warnings.map(waring => console.log(warning.yellow));

  }
  console.log(`Webpack stats: ${stats}`);

  console.log("App has been compiled for production (JS files) and wrriten to /dist..");
  return 0;


});





