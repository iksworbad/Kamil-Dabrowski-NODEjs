module.exports.getMovie = function(id){
    console.log('Reading a movie db ...');
    return {
        id: "5b9b03b66ed94c714b18b0f2",
Title: "Saw",
Year: "2004",
Rated: "R",
Released :"29 Oct 2004",
Runtime:"103 min"
,Genre:"Horror, Mystery, Thriller"
,Director:"James Wan"
,Writer: "Leigh Whannell, James Wan (story), Leigh Whannell (story)"
,Actors:
"Leigh Whannell, Cary Elwes, Danny Glover, Ken Leung"
,Plot:
"Waking up in a undisclosed location in a unknown room two men, adam an..."
,Language:
"English"
,Country:
"USA"
,Awards:
"8 wins & 10 nominations."
,Poster:
"https://m.media-amazon.com/images/M/MV5BMjE4MDYzNDE1OV5BMl5BanBnXkFtZT..."
,Metascore:
"46"
,imdbRating:
"7.6"
,imdbVotes:
"339,770"
,imdbID:
"tt0387564"
,Type:
"movie"
,DVD:
"15 Feb 2005"
,BoxOffice:
"&pound;55,100,000"
,Production:
"Lions Gate Films"
,Website:
"http://www.sawmovie.com/"
    }
}

module.exports.getComment = function(id){
    console.log('Reading a movie db ...');
    return { id: "5b9b03b66ed94c714b18b0f2",
        comment: "that was great"
    }
}