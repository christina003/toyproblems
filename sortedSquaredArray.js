// write a function that takes in a non empty array of integers that are sorted in ascending order and returns a new array of the same length with the squares of the original integers also sorted in ascending order

function sortedSquaredArray(array) {
  let results = [];

  for (let i = 0; i < array.length; i++) {
    results.push(array[i] * array[i]);
  }
  return results.sort((a, b) => a - b);
}
