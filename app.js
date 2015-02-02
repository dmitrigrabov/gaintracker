var express = require('express'),
	path			= require( 'path' ),
	hbs		= require( 'hbs' ),
	routes 	= require( './node/routes/index' ),
	router  = express.Router();
	app		= express();

app.set( 'views', path.join( __dirname, 'node/views' ) );
app.set( 'view engine', 'hbs' );

app.use( '/', routes( router ) );
app.use( '/app', express.static( __dirname + '/app' ) );

var server = app.listen(3000, function () {
	var host = server.address().address,
		port = server.address().port;

	console.log('Listening at http://%s:%s', host, port);
});
