/* given two non-empty arrays of integers, write a function that determines whether the second array is a subsequence of the first one. A subsequence of an array is a set of numbers that raen't necessarily adjacent in the array, but that are in the same order as they appear in the array. Note that a single number in an array and the array itself are both valid subsequences of the array */

function isValidSubsequence(array, sequence) {
  let j = 0;
  let results = [];
  for (let i = 0; i < sequence.length; i++) {
    for (j; j < array.length; j++) {
      if (sequence[i] === array[j]) {
        results.push(array[j]);
        j = j + 1;
        break;
      }
    }
  }

  if (results.length === sequence.length) {
    return true;
  } else {
    return false;
  }
}

//test case
// {
//   "array": [5, 1, 22, 25, 6, -1, 8, 10],
//   "sequence": [1, 6, -1, 10]
// }
