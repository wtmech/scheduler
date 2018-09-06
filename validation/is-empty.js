const isEmpty = value =>
  value === undefined || // if value is equal to undefined
  value === null || // or null
  (typeof value === 'object' && Object.keys(value).length === 0) || // if object is empty
  (typeof value === 'string' && value.trim().length === 0); // if string is empty

module.exports = isEmpty;

// global function to check if something is empty. Validator only checks strings.