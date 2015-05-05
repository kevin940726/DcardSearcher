var google = require('google');
var scraper = require('google-search-scraper');

module.exports = function(app) {

	app.get('/search/:query/', function(req, res) {
		google.resultsPerPage = 100;
		var nextCounter = 1;
		console.log(req.params.page);

		google(req.params.query + ' site:dcard.tw', function(err, next, links){
			if (err) console.error(err);
			
			return res.send(links);
		});
		
	})


	app.get('*', function(req, res) {
		res.render('index');
	});
};




