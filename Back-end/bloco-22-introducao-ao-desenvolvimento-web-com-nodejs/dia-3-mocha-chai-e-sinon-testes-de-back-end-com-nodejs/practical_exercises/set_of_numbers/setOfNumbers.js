function setOfNumbers(num) {
  if (typeof num !== 'number') {
    return 'The value must be a number';
  }
  
  if (num === 0) {
    return 'neutral';
  }
  
  if (num < 0) {
    return 'negative';
  }

  if (num > 0) {
    return 'positive';
  }
}
module.exports = setOfNumbers;