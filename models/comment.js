const Joi = require('joi');
const mongoose = require('mongoose');

const comment = mongoose.model('Comment', new mongoose.Schema({
  id: String,
  yourComment: String
},
  {
    versionKey: false
}));


function validateComment(comment) {
  const schema = {
    id: Joi.string().required(),
    yourComment: Joi.string().required()
  };

  return Joi.validate(comment, schema);
}

exports.comment = comment; 
exports.validate = validateComment;