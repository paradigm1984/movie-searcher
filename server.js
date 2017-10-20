var express = require('express');
var PORT = process.env.PORT || 3000;

var app = express();

// serve 'static' content for the app from the 'public' folder
app.use(express.static(__dirname + '/public'));


app.listen(PORT, function() {
	console.log("listening on " + PORT);
});
