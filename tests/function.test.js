const functions = require('../middleware/function');

describe('functions', ()=>{

    it('should return string with replace space', () =>{

        const result = functions.replaceSpace('The Shawshank Redemption');
        expect(result).toMatch(/The.Shawshank.Redemption/);
    
    });

});
describe('test movies request', ()=>{

    it('should return all movie propertis, where we compare title of movie', () =>{

        const result = functions.getFilm("5b9b03b66ed94c714b18b0f2");
        expect(result.Title).toBe("Saw");
    
    });

    it('should return all movie propertis', () =>{

        const result = functions.getFilm("5b9b03b66ed94c714b18b0f2");
        expect(result).toEqual({"Actors": "Leigh Whannell, Cary Elwes, Danny Glover, Ken Leung", "Awards": "8 wins & 10 nominations.", "BoxOffice": "&pound;55,100,000", "Country": "USA", "DVD": "15 Feb 2005", "Director": "James Wan", "Genre": "Horror, Mystery, Thriller", "Language": "English", "Metascore": "46", "Plot": "Waking up in a undisclosed location in a unknown room two men, adam an...", "Poster": "https://m.media-amazon.com/images/M/MV5BMjE4MDYzNDE1OV5BMl5BanBnXkFtZT...", "Production": "Lions Gate Films", "Rated":"R", "Released": "29 Oct 2004", "Runtime": "103 min", "Title": "Saw", "Type": "movie", "Website": "http://www.sawmovie.com/", "Writer": "Leigh Whannell, James Wan (story), Leigh Whannell (story)", "Year": "2004", "id": "5b9b03b66ed94c714b18b0f2", "imdbID": "tt0387564", "imdbRating": "7.6", "imdbVotes": "339,770"});
    
    });


});

describe('test comments request', ()=>{

    it('should return id and comment', () =>{

        const result = functions.getComment("5b9b03b66ed94c714b18b0f2");
        expect(result).toEqual({id: "5b9b03b66ed94c714b18b0f2", comment: "that was great"});
    
    });


    it('should return only comment', () =>{

        const result = functions.getComment("5b9b03b66ed94c714b18b0f2");
        expect(result.comment).toEqual("that was great");
    
    });

});