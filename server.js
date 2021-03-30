var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.get('/test1', function(req, res) {
    res.sendFile(path.join(__dirname + '/index1.html'));
});

app.get('/test2', function(req, res) {
    res.sendFile(path.join(__dirname + '/index2.html'));
});

app.listen(8080);