const { Movie, validatemovie } = require("../models/movie");
const { comment, validate } = require("../models/comment");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const request = require("request");
const fs = require("fs");

router.get("/:id", async (req, res) => {
  const comments = await comment.find({ id: req.params.id });
  if (!comments)
    return res
      .status(404)
      .send("The comments with the given ID was not found.");
  res.send(comments);
});

router.get("/", async (req, res) => {
  const comments = await comment.find();
  if (!comments)
    return res
      .status(404)
      .send("The comments with the given ID was not found.");
  res.send(comments);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const movie = await Movie.findById(req.body.id);

    const comments = new comment({
      id: req.body.id,
      yourComment: req.body.yourComment
    });
    await comments.save();
    res.send(comments);
  } catch (ex) {
    return res.status(404).send("The movie with the given ID was not found.");
  }
});

module.exports = router;
