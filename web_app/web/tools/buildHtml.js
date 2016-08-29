//Build HTML file to /dist.. fs is used to interact with node file system (Built int)
//cherio used for using Jquery style referencing of DOM elements

import fs from "fs";
import cheerio from "cheerio";

fs.readFile("src/index.html", 'utf8', (err, markup) => {

  if (err) {
    return console.log(err);
  }

  //Load the css file..
  const $ = cheerio.load(markup);
  $('head').prepend('<link rel="stylesheet" href="/public/stylesheets/style.css">');

  //write the new html file into dist folder
  fs.writeFile('dist/index.html', $.html(), 'utf8', function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("index.html written to /dist");
  });


});
