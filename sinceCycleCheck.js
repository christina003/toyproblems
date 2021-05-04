function hasSingleCycle(array) {
  //tracker
  let tracker = [];
  let counter = 0;
  let index = array[0];

  //counter  = length
  //initial index whatever is at array[0]  //2
  while (counter < array.length) {
    tracker.push(index);
    let prev = index; //2 //1
    index += array[index];
    counter++; // 1
    if (index < 0) {
      while (index < 0) {
        index = Math.abs(index + array[prev]);
      }
    } else if (index > array.length - 1) {
      while (index > array.length - 1) {
        index = index - array.length;
      }
    }
  }

  let sorted = tracker.sort((a, b) => a - b);
  console.log(sorted);
  for (let i = 0; i < sorted.length; i++) {
    if (i !== sorted[i]) {
      return false;
    } else {
      continue;
    }
  }
  return true;
  //while loop

  //add that number to tracker //2
  //then do index + number //2 + -4

  //if the number is less than 0 or greater than the length of the array
  //shift to front or end of array

  //go through the tracker
  //check to see if indexes 0 through array.length - 1 are in there
  //if it is, return true
  //otherwise return false
}
