/*you're given an array of integers and an integer. Write a function that moves all isntances of that integer in the array to the end of the array and returns the array. */

function moveElementToEnd(array, toMove) {
  let i = 0;
  let counter = 0;

  while (i < array.length - counter) {
    if (array[i] === toMove) {
      array.push(array[i]);
      array.splice(i, 1);
      counter++;
    } else {
      i++;
    }
  }

  return array;
}

//iterate through the array
//if currElem === to Move
//push
//slice

//otherwise
//continue

//return array

//how to know when to stop to prevent unecessary iterations
