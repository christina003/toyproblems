/*given an array of intergers between 1 and n, inclusive, where n is the length of the array, write a function that returns the first integer that appears more than once(when the array is read from left to right). In other words, out of all the integers that might occur more than once in the input array, your function should return the one whose first duplicate value has the minimum index */

//my really bad solution
function firstDuplicateValue(array) {
  //create storage object
  //iterate through array
  //if storage[currentElement] is undefined
  //set storage[currentElement] equal to 1
  //else
  //increment the value of storage element

  //if i is greater than 2
  //check for duplicates in storage array

  let storage = {};
  let isDuplicate;
  for (let i = 0; i < array.length; i++) {
    if (i > 1) {
      isDuplicate = checkDuplicates(storage);
      if (isDuplicate !== -1) {
        return isDuplicate;
      }
    }
    if (storage[array[i]] === undefined) {
      storage[array[i]] = 1;
    } else {
      storage[array[i]] = storage[array[i]] + 1;
    }
  }
  isDuplicate = checkDuplicates(storage);

  return isDuplicate;
}

function checkDuplicates(numbers) {
  for (const key in numbers) {
    if (numbers[key] === 2) {
      return Number(key);
    }
  }
  return -1;
}

//algo expert solutions
//runs in O(n^2) time where n is the length of the input array
function firstDuplicateValue(array) {
  let minimumSecondIndex = array.length;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        minimumSecondIndex = Math.min(minimumSecondIndex, j);
      }
    }
  }
  if (minimumSecondIndex === array.length) return 1;

  return array[minimumSecondIndex];
}
