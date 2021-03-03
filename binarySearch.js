/* Write a function that takes in a sorted array of integers as well as a target integer. The function should use the binary search algorithm to determine if the target integer is contained in the array and should return its index if it is, otherwise return -1 */

function binarySearch(array, target) {
  //create left & right pointer
  //create index variable

  let right = array.length;
  let left = 0;
  let index = Math.floor((left + right) / 2);

  //declare recursive function
  //if left point > right point
  //return -1
  //if target === array[index]
  //return index
  //else if target > array[index]
  //change left & right pointer
  //recurse
  //else (target < array[index])
  //change left & right pointer
  //recurse
  const recurse = () => {
    if (left > right) {
      return -1;
    }
    if (target === array[index]) {
      return index;
    } else if (target > array[index]) {
      left = index + 1;
      index = Math.floor((left + right) / 2);
      return recurse();
    } else {
      right = index - 1;
      index = Math.floor((left + right) / 2);
      return recurse();
    }
  };

  return recurse();
}
