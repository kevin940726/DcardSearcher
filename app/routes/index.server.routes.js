var google = require('google');

module.exports = function(app) {

	app.get('/search/:query/:category', function(req, res) {
		google.resultsPerPage = 100;
		var nextCounter = 1;

		google(req.params.query + " site:dcard.tw/f/" + req.params.category, function(err, next, links){
			if (err) console.error(err);
			
			return res.send(links);
		});
		
	});

	app.get('/search/:query/', function(req, res) {
		google.resultsPerPage = 100;
		var nextCounter = 1;

		google(req.params.query + " site:dcard.tw", function(err, next, links){
			if (err) console.error(err);
			
			return res.send(links);
		});
		
	});


	app.get('*', function(req, res) {
		res.render('index');
	});
};




