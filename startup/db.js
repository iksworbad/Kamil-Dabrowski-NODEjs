const winston = require('winston');
const mongoose = require('mongoose');

module.exports = function() {
  mongoose.connect(process.env.kamil_db)
    .then(() => {winston.info('Connected to MongoDB...')})
    .catch((err) => {
      console.log("Not Connected to Database ERROR!", err);
    });
}