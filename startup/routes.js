const express = require('express');
const comments = require('../routes/comments');
const movies = require('../routes/movies');
const error = require('../middleware/error');

module.exports = function(app) {
  app.use(express.json());
  app.use('/api/comments', comments);
  app.use('/api/movies', movies);
  app.use(error);
}