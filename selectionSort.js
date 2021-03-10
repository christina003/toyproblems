/*Write a function that takes in an array of integers and returns a sorted version of that array. Use the selection sort algorithim to sort the array */

function selectionSort(array) {
  //iterate through array
  for (let i = 0; i < array.length; i++) {
    //create curr min var
    let currMin = array[i];
    let currMinIndex = i;

    //iterate through array (second loop)
    for (let j = i + 1; j < array.length; j++) {
      //if curr min var > next element (j)
      if (currMin > array[j]) {
        //replace curr min = next element
        currMin = array[j];
        currMinIndex = j;
      }
    }
    //end of second loop, swap current min to initial element (i)
    let tmp = array[i];
    array[i] = currMin;
    array[currMinIndex] = tmp;
  }

  return array;
  //return array
}
