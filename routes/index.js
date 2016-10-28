var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});

router.get('/feed', function(req, res, next) {
  res.render('feed', { title: 'Express' });
});

router.get('/groups1', function(req, res, next) {
  res.render('groups1', { title: 'Express' });
});

router.get('/tasks', function(req, res, next) {
  res.render('tasks', { title: 'Express' });
});

module.exports = router;