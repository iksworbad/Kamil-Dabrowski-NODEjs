const Joi = require('joi');
const mongoose = require('mongoose');


const Movie = mongoose.model('Movies', new mongoose.Schema({
    
          Title: {
            type: 'string'
          },
          Year: {
            type: 'string'
          },
          Rated: {
            type: 'string'
          },
          Released: {
            type: 'string'
          },
          Runtime: {
            type: 'string'
          },
          Genre: {
            type: 'string'
          },
          Director: {
            type: 'string'
          },
          Writer: {
            type: 'string'
          },
          Actors: {
            type: 'string'
          },
          Plot: {
            type: 'string'
          },
          Language: {
            type: 'string'
          },
          Country: {
            type: 'string'
          },
          Awards: {
            type: 'string'
          },
          Poster: {
            type: 'string'
          },
          Ratings: {
            type: 'array',
            items: [
              {
                type: 'object',
                properties: {
                  Source: {
                    type: 'string'
                  },
                  Value: {
                    type: 'string'
                  }
                },
                required: [
                  'Source',
                  'Value'
                ]
              },
              {
                type: 'object',
                properties: {
                  Source: {
                    type: 'string'
                  },
                  Value: {
                    type: 'string'
                  }
                },
                required: [
                  'Source',
                  'Value'
                ]
              },
              {
                type: 'object',
                properties: {
                  Source: {
                    type: 'string'
                  },
                  Value: {
                    type: 'string'
                  }
                },
                required: [
                  'Source',
                  'Value'
                ]
              }
            ]
          },
          Metascore: {
            type: 'string'
          },
          imdbRating: {
            type: 'string'
          },
          imdbVotes: {
            type: 'string'
          },
          imdbID: {
            type: 'string'
          },
          Type: {
            type: 'string'
          },
          DVD: {
            type: 'string'
          },
          BoxOffice: {
            type: 'string'
          },
          Production: {
            type: 'string'
          },
          Website: {
            type: 'string'
          },
          Response: {
            type: 'string'
          }
        
      
}));
function validateMovie(movie) {
    const schema = {
      title: Joi.string().required(),
    };
  
    return Joi.validate(movie, schema);
  }
  

  exports.Movie = Movie; 
  exports.validateMovie = validateMovie;