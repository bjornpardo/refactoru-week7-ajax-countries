var express = require('express');
var bodyParser = require('body-parser');
var Countries = require('./models/countries.json');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/countries', function(req, res) {
	res.send(Countries);
});

app.get('/search', function(reg, res) {
	var myCountry = req.query.searchedCountry;
	
	var res.send({
		selectedCountry: Countries[myCountry]
	});
})

var server = app.listen(8666, function() {
	console.log('Express server listening on port ' + server.address().port);
});
