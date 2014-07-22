var express = require('express');

var app = express();
app.use(express.static(__dirname + '/public'));

// This needs to go through the server twice, once to get the page, one to get main.js
app.get('/', function(req, res) {
	res.send('<h1>Hello Boulder</h1><script src="/main.js"></script>');
});

var server = app.listen(9909, function() {
	console.log('Express server listening on port ' + server.address().port);
});
