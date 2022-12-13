var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Day3
router.get('/Day3', function(req, res, next) {
  res.render('day5', { title: 'Day3' });
});

// Day6
router.get('/Day6', function(req, res, next) {
  res.render('day6', { title: 'Day6' });
});

// Day7
router.get('/Day7', function(req, res, next) {
  res.render('day7', { title: 'Day7' });
});

// Day9
router.get('/Day9', function(req, res, next) {
  res.render('day9', { title: 'Day9' });
});

// Day10
router.get('/Day10', function(req, res, next) {
  res.render('day10', { title: 'Day10' });
});

// Day11
router.get('/Day11', function(req, res, next) {
  res.render('day11', { title: 'Day11' });
});

// Day12
router.get('/Day12', function(req, res, next) {
  res.render('day12', { title: 'Day12' });
});

// Day13
router.get('/Day14', function(req, res, next) {
  res.render('day14', { title: 'Day14' });
});

// Day15
router.get('/Day15', function(req, res, next) {
  res.render('day15', { title: 'Day15' });
});

// Day18
router.get('/Day18', function(req, res, next) {
  res.render('day18', { title: 'Day18' });
});

// Day19
router.get('/Day19', function(req, res, next) {
  res.render('day19', { title: 'Day19' });
});
// Day19_2
router.get('/Day19_2', function(req, res, next) {
  res.render('day19_2', { title: 'Day19_2' });
});

// Day19_3
router.get('/Day19_3', function(req, res, next) {
  res.render('day19_3', { title: 'Day19_3' });
});


// Day20
router.get('/Day20', function(req, res, next) {
  res.render('day20', { title: 'Day20' });
});

// Day21
router.get('/Day21', function(req, res, next) {
  res.render('day21', { title: 'Day21' });
});

// Day22
router.get('/Day22', function(req, res, next) {
  res.render('day22', { title: 'Day22' });
});

// Day23
router.get('/Day23', function(req, res, next) {
  res.render('day23', { title: 'Day23' });
});

// Day24
router.get('/Day24', function(req, res, next) {
  res.render('day24', { title: 'Day24' });
});

// Day25
router.get('/Day25', function(req, res, next) {
  res.render('day25', { title: 'Day25' });
});

// Day26
router.get('/Day26', function(req, res, next) {
  res.render('day26', { title: 'Day26' });
});

// Storm
router.get('/Storm', function(req, res, next) {
  res.render('storm', { title: 'Storm' });
});

// Line
router.get('/Line', function(req, res, next) {
  res.render('line', { title: 'Line' });
});

module.exports = router;
