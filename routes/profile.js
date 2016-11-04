var data = require('../profiles.json');

exports.personInfo = function(req, res) {
	
	var name = req.params.username;
	var person;

	for (var i = 0; i < data.length; i++) {
		if (data[i].username == req.params.name) {
			console.log(i, "\t", data[i]);
			person = data[i];
		}
	}

	res.render('profile', person);
}