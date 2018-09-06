const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const MovieSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  length: {
    type: Number,
    required: true
  },
  movieTimes: {
    weekdayTimes: [String],
    weekendTimes: [String]
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Movie = mongoose.model('movies', MovieSchema);