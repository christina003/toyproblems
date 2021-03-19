/*Write a function that takes in an array of at least three integers and without sorting the input array, returns a sorted array of the three largest integers in the input array */

function findThreeLargestNumbers(array) {
  let results = [null, null, null];

  for (let i = 0; i < array.length; i++) {
    if (results[2] === null || array[i] > results[2]) {
      results.shift();
      results.push(array[i]);
    } else if (results[1] === null || array[i] > results[1]) {
      let temp = results[1];
      results.splice(1, 1, array[i]);
      results[0] = temp;
    } else if (
      results[0] === null ||
      (array[i] > results[0] && array[i] < results[1])
    ) {
      results.shift();
      results.unshift(array[i]);
    }
  }
  return results;
}
