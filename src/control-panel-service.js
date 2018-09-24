
// node
var express = require("express");
var path = require("path");
var http = require("http");
var app = express(); 
var expressLayouts = require('express-ejs-layouts');

// electron
const {ipcRenderer} = require('electron')

// robot
const robot = require("robotjs");


// 告诉 Express 你的视图存在于一个名为 views 的文件夹中
app.use(express.static(path.join(__dirname, '/control-panel/static'), {maxAge: 0}));
app.set('views', path.join(__dirname, '/control-panel/view'));
app.set('view engine', 'ejs');
// app.set('layout', 'layout.html');
// app.use(expressLayouts);


// 当请求根目录的时候被调用
app.get("/", function(request, response) {
    response.render('index.ejs', {
        name: 'tinyphp'
    });
});


app.get("/api/keyboard/:key", function(request, response) {
    robot.keyTap(request.params.key);
});

app.get("/api/xiaobei/:key", function(request, response) {
  ipcRenderer.send('xiaobei', request.params.key)
});


app.use(function(request, response) {
    response.statusCode = 404;
    response.end("404");
});
http.createServer(app).listen(8888);