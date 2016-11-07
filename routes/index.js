var data = require('../data.json');

var feed = require('../feed.json');

var topPerson = {score: 0};


feed.posts.forEach(function(post){
	if(post.score > topPerson.score)
		topPerson = post;
});

data.indexData.topPerson = topPerson;

// console.log(data);

exports.view = function(req, res){
	res.render('index', data.indexData);
};
