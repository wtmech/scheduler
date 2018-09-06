const express = require('express');
const router = express.Router();
const passport = require('passport');

//Movie Model
const Movie = require('../../models/Movies');

//Validation
const validateMovieInput = require('../../validation/movie');

//@route   GET api/movies/test
//@desc    Tests movie route
//@access  Public
router.get('/test', (req, res) => res.json({ msg: 'Movies works' }));

//@route   GET api/movies
//@desc    Get Movies
//@access  Public
router.get('/', (req, res) => {
  Movie.find()
    .sort({ date: -1 })
    .then(movies => res.json(movies))
    .catch(err => res.status(404).json({ nomoviesfound: 'No movies found' }));
});

// @route   GET api/movies/:id
// @desc    Get movie by id
// @access  Public
router.get('/:id', (req, res) => {
  Movie.findById(req.params.id)
  .then(movie => res.json(movie))
  .catch(err => {
    res.status(400).json({ nomoviefound: 'No movie found with that ID' })
  });
});

// @route   POST api/movies
// @desc    Add Movie
// @access  Private
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {

    const newMovie = new Movie({
      title: req.body.title,
      length: req.body.length,
      movieTimes: {
        weekdayTimes: req.body.movieTimes.weekdayTimes,
        weekendTimes: req.body.movieTimes.weekendTimes
      },
      user: req.user.id
    });
    newMovie.save().then(movie => res.json(movie));
  }
);

// @route   DELETE api/movies/:id
// @desc    Delete post
// @access  Private
router.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Movie.findById(req.params.id)
      .then(movie => {
        movie.remove().then(() => res.json({ success: true }));
      })
      .catch(err => res.status(400).json({ movienotfound: 'No movie found with that ID' }))
  }
)

module.exports = router;