/*write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order. If no two numbers sum up to the target sum, the function should return an empty array.

Note that the target sum as to be obtained by summing two different integers in the array; you can't add a single integer to itself in order to obtain the target sum*/

function twoNumberSum(array, targetSum) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (i === j) {
        continue;
      } else {
        if (array[i] + array[j] === targetSum) {
          result.push(array[i], array[j]);
          return result;
        }
      }
    }
  }
  return result;
}

//test cases
// {
//   "array": [3, 5, -4, 8, 11, 1, -1, 6],
//   "targetSum": 10
// }
