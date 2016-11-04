var data = require('../data.json');

var feed = require('../feed.json');

var topPerson = {score: 0};

feed.posts.forEach(function(person){
	if(person.score > topPerson.score)
		topPerson = person;
});

data.indexData.topPerson = topPerson;

console.log(data);

exports.view = function(req, res){
	res.render('index', data.indexData);
};
