/*write a function that takes in an array of integers and returns a sorted version of that array using the bubble sort algorithim */

var bubbleSort = function (array) {
  var highest;
  sorting(array, highest);
  return array;
};

var sorting = function (array, highest) {
  for (var i = 0; i < array.length; i++) {
    if (highest === array.length - 1) {
      return array;
    }

    if (array[i] > array[i + 1]) {
      highest = array[i];
      array[i] = array[i + 1];
      array[i + 1] = highest;
      sorting(array, highest);
    }
  }
};
