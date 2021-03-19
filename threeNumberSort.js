/*you're given an array of integers and another array of three distinct integers. The first array is guaranteed to only contain integers that are in the second array, and the second array represents a desired order for the integers in the first array. Write a function that sorts the first array according to the desired order in the second array.

The function should perform this in place and shouldn't use any auxiliary space. */

function threeNumberSort(array, order) {
  let tracker = 0;

  for (let i = 0; i < order.length; i++) {
    let orderElem = order[i];
    for (let j = 0; j < array.length; j++) {
      if (orderElem === array[j]) {
        let temp = array[tracker];
        array[tracker] = array[j];
        array[j] = temp;
        tracker++;
        j = tracker;
      }
    }
  }
  return array;
}

//loop through order array
//loop through array, starting from tracker variable
//if the currElem in order array === currElem in array
//swap currElem in array with the element in tracker variable
//increment tracker

//otherwise, continue looping through array
