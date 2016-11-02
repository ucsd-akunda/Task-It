var express = require('express');
var router = express.Router();
var data = require('../data.json');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', data.indexData);
});

router.get('/feed', function(req, res, next) {
  res.render('feed', data.feedData);
});

router.get('/tasks', function(req, res, next) {
  res.render('tasks', data.tasksData);
});

router.get('/groups1', function(req, res, next) {
  res.render('groups1', data.groupsData);
});

module.exports = router;