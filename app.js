var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var settings = require('./settings.json');
var utils = require('./lib/utils.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.send('myes.');
});

app.get('/get-wod/', function (req, res) {

	utils.getWOD(function(word, definition){
		
		var response = '<h1>' + word + '</h1>' + definition;
		res.send(response);
	});
});


app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

var server = app.listen(settings.server_port, function () {

  var port = server.address().port;
  console.log('Listening at port %s', port);
});

