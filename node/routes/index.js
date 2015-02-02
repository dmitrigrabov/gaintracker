module.exports = function( router ) {

	/* GET home page. */
	app.get( '/', function( req, res ) {
		res.render( 'index' );
	});

	return router;
}