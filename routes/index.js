var data = require('../taskdata.json');

exports.view = function(req, res){
	res.render('index', data);
};
