function smallestDifference(arrayOne, arrayTwo) {
  //sort arrays
  //declare a smallestDiff variable
  //declare results
  arrayOne.sort((a, b) => b - a);
  arrayTwo.sort((a, b) => a - b);
  console.log(arrayOne);
  console.log(arrayTwo);

  let smallestDiff = null;
  let results = [];

  for (let i = 0; i < arrayOne.length; i++) {
    let array1Elem = arrayOne[i];
    for (let j = 0; j < arrayTwo.length; j++) {
      let array2Elem = arrayTwo[j];
      let currDiff = Math.abs(array1Elem - array2Elem);

      if (currDiff < smallestDiff || smallestDiff === null) {
        smallestDiff = currDiff;
        results = [array1Elem, array2Elem];
      }
    }
  }

  return results;
}
