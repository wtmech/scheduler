const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateMovieInput(data) {
  let errors = {};

  data.name = !isEmpty(data.title) ? data.title : '';
  data.length =!isEmpty(data.length) ? data.length : '';

  if (Validator.isEmpty(data.title)) {
    errors.name = 'Title field is required';
  }

  if (Validator.isEmpty(data.length)) {
    errors.length = 'Length field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};