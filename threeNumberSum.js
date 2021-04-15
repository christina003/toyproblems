function threeNumberSum(array, targetSum) {
  //sort array
  array.sort((a, b) => a - b);

  let results = [];

  for (let i = 0; i < array.length; i++) {
    let curr = i;
    let left = i + 1;
    let right = array.length - 1;
    while (left < right) {
      let sum = array[curr] + array[left] + array[right];

      if (sum === targetSum) {
        results.push([array[curr], array[left], array[right]]);
        left++;
        right--;
      } else if (sum < targetSum) {
        left++;
      } else {
        right--;
      }
    }
  }

  return results;
  //iterate through array
  //set curr
  //set right pointer
  //set end pointer
  //while right is less than end
  //if sum of those is less than target sum
  //move right pointer
  //if sum is greater than target
  //move end pointer
  //if sum is equal too
  //push array with curr, right, end into results array
  //increment right, decrement end
}
