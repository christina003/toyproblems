/*Write a function that takes in an array of integers and returns a sorted version of that array using insertion sort algorithim */

function insertionSort(array) {
  //loop through the array
  //declare curr variable
  //while curr var is greater than 0 AND while curr is less than the previous num
  //swap the two
  //decrement curr

  for (var i = 1; i < array.length; i++) {
    let curr = i;
    while (curr > 0 && array[curr] < array[curr - 1]) {
      swap(curr, curr - 1, array);
      curr -= 1;
    }
  }
  return array;
}

function swap(i, j, array) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
