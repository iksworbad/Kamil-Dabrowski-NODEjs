const db = require('../tests/db');

    function replaceSpace(text){
    return text.replace(/ /,'+');
    }
    exports.replaceSpace = replaceSpace;


    //testing api requests functions
    module.exports.getFilm = function(movie){
        const result = db.getMovie(movie.Title);
        return result;
    }

    module.exports.getComment = function(id){
        const result = db.getComment();
        return result;
    }