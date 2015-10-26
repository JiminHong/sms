var express = require('express');

//define express
var app = express();
//what folder you want to serve. "public" = main folder 
app.use(express.static('public'))

//process.env.PORT = whatever node had configured
var server = app.listen(process.env.PORT || 3000, function(){
	console.log("Server listenin on PORT", server.address().port)
})