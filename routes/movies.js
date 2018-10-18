const { Movie, validateMovie } = require("../models/movie");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const request = require("request");
const functions = require("../middleware/function");

router.get("/", async (req, res) => {
  const movies = await Movie.find()
    .select({ Title: 1, Year: 1, Runtime: 1, Genre: 1 })
    .sort({ Title: -1 });

  res.send(movies);
});

router.post("/", (req, res) => {
  const { error } = validateMovie(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const nameplus = functions.replaceSpace(req.body.title);
  request.get(
    "http://www.omdbapi.com/?apikey=" +
      process.env.key +
      "&plot=full&t=" +
      nameplus,
    { json: true },
    async (err, ress, body) => {
      if (err) {
        return console.log(err);
      }
      console.log(body);
      const movie = new Movie(body);
      await movie.save();
      res.send(body);
    }
  );
});

router.get("/:id", async (req, res) => {
  const movie = await Movie.findById(req.params.id);

  if (!movie)
    return res.status(404).send("The movie with the given ID was not found.");

  res.send(movie);
});

module.exports = router;
