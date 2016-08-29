/**
 * Created by quikr on 7/18/16.
 */
/*
import express from "express";
import path from "path";
import open from "open";
*/
var  express =require("express");
var  path =require("path");
var  open = require( "open");

const port = 2323;
const app = express();

app.use(express.static('dist'));

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

