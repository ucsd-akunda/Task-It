var data = require('../feed.json');

exports.view = function(req, res){
	res.render('feed', data);
};