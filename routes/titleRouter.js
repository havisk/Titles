var express = require('express');
var mongoose =  require('mongoose');
var bodyParser = require('body-parser');

var Titles = require('../models/titles');

var titleRouter = express.Router();
titleRouter.use(bodyParser.json());

titleRouter.route('/')

.get(function (req, res, next) {
  Titles.find(function(err, titles){
    if(err) next(err);
    res.json(titles);
  });
 
})

 titleRouter.route('/:id')

 .get(function (req, res, next) {
  Titles.findById(req.params.id, function(err, title) {
    if (err) next(err);
    console.log(title);
    res.json(title);
  });
});



module.exports = titleRouter;

