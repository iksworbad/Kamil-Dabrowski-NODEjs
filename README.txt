# Kamil-Dabrowski-NODEjs

Hello, 

I make that program in node.js as a part of the recruitment process to netguru. I belive that it will help me get this job,
Program is made public on git and heroku. 

Heroku: https://pure-shore-41210.herokuapp.com
GIT: https://github.com/iksworbad/Kamil-Dabrowski-NODEjs

I used visual studio Code to write this.
I recoment to use chrome Postman to send "post" and "get" request.

My REST API have:  (here you have example of requests)

1) POST /movies
     POST:  https://pure-shore-41210.herokuapp.com/api/movies
      body: 
      {
	     "title": "never come back"
      } 
      Request response include full movie object, along with all data fetched from external API.
2) GET /movies
    GET: https://pure-shore-41210.herokuapp.com/api/movies
    I add sort by desc by title.(Z-A)
    I decide to show just Title, Year, Runtime, Genre.
    
3)POST /comments
  POST: https://pure-shore-41210.herokuapp.com/api/comments
  body:
  {
	"id": "5bc90afefce6720015fc07da",
	"yourComment": "See u soon"
  }
4)GET /comments
   GET: https://pure-shore-41210.herokuapp.com/api/comments/5b9d34ebb61d0f00155bee07

!!!
I know that I shouldn't show my .env file but it's just my show program and if it will be my real project I wont publish it on git. Its just for fun :D 
if u want use localhost and run it on your pc you have to set variable in .env for your preferences.
