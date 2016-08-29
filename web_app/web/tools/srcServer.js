/**
 * Created by quikr on 7/12/16.
 */
 import webpack from "webpack";
import path from "path";
import config from "../webpack.config.dev";
import open from "open";
import express from 'express';
var app = require('express')();
var http = require('http').Server(app);


/* eslint-disable no-console */

const port = 2323;
 var io = require('socket.io')(http);
const compiler = webpack(config);
console.log(path.resolve(__dirname + '/../public'));

//app.use(express.static(path.resolve(__dirname + '/../public/')));
app.use(express.static('dist'));
app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));


app.get('*', function(req, res) {
//console.log("reaching here don't");
  res.sendFile(path.join( __dirname, '../src/index.html'));
});
io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
    io.emit('chat message', msg);
    //io.emit('chat message', msg);
  });
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

});


http.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
