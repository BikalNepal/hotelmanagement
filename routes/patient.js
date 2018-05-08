var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Post = require('../models/Patient.js');


router.get('/', function(req, res) {
 
    Post.find(function (err, post) {
      if (err) return next(err);
      res.json(post);
    })
  
});
router.get('/:id', function(req, res, next) {

    Post.findById(req.params.id,function (err, post) {
      if (err) return next(err);
      res.json(post);
    })
});

router.post('/', function(req, res) {

    Post.create(req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    })
});

router.put('/:id', function(req, res, next) {

    Post.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, post) {
      if (err) return next(err);
      res.json(post);
    })
});

router.delete('/:id', function(req, res, next) {

    Post.findByIdAndRemove(req.params.id, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
});
module.exports = router;