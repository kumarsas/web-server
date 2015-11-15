var express = require('express');
var app = express();
var PORT = 3010;

var middleware = require('/middleware.js')

//application level middleware

app.use(middleware.logger);
//app.use(middleware.requireAuthentication);

//using route level middleware
/*app.get('/', function( req, res ){
	res.send('Hello Express')
});*/

app.get('/about', middleware.requireAuthentication, function( req, res ){
	res.send(' About us');
})

app.use(express.static(__dirname + '/public'));

app.listen( PORT, function(){
	console.log('Express server started on port ' + PORT)
} );

