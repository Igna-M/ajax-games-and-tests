var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/memory', function(req, res) {
  res.render('memory');
});

router.get('/mole', function(req, res) {
  res.render('mole');
});

router.get('/connect-four', function(req, res) {
  res.render('connect-four');
});

router.get('/snake', function(req, res) {
  res.render('snake');
});
router.get('/snake-plus', function(req, res) {
  res.render('snake-plus');
});

router.get('/spaceInvaders', function(req, res) {
  res.render('spaceInvaders');
});

router.get('/random-canvas', function(req, res) {
  res.render('random-canvas');
});

module.exports = router;
