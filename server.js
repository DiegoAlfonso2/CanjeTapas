var PORT = 3000;

var express = require('express');

var app = express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// loggin request
app.use(function (req, res, next) {
    console.log(req.method + ' ' + req.originalUrl);
    next();
});

//public directory
app.use(express.static(__dirname + '/public'));

//start the server
var server = app.listen(process.env.PORT || PORT, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Started server at http://' + host + ':' + port);
});
