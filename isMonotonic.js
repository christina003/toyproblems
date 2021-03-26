/* write a function that takes in an array of integers and returns a boolean representing whetehr the array is monotonic. An array is said to be montonic if tis elements, from left to right, are entirely non-increasing or entirely non-decreasing */

function isMonotonic(array) {
  let decreasing = true;
  let increasing = true;

  for (let i = 0; i < array.length; i++) {
    if (array[i] < array[i + 1]) {
      increasing = false;
    } else if (array[i] > array[i + 1]) {
      decreasing = false;
    }
  }

  if (decreasing || increasing) {
    return true;
  } else {
    return false;
  }
}

//declare decreasing and increasing equal to true

//iterate through the array
//if curr element is less than next element
//increasing = false
//if curr element is greater than next element
//decreasing false

//if decreasing or increasing is true
//return true
//else return false
