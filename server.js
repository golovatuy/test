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

app.get('/test3', function(req, res) {
    res.sendFile(path.join(__dirname + '/index3.html'));
});

app.get('/test4', function(req, res) {
    res.sendFile(path.join(__dirname + '/index4.html'));
});

const PORT = process.env.PORT || 5555;
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));