/*Even numbered students, half class is wearing red, half class is wearing blue. All students wearing red must be in same row, all students wearing blue must be in the same row, each student in back row must be strictly taller than the student directly in front of them in the front row. */

function classPhotos(redShirtHeights, blueShirtHeights) {
  //sort arrays
  redShirtHeights.sort((a, b) => a - b);
  blueShirtHeights.sort((a, b) => a - b);

  if (
    redShirtHeights[redShirtHeights.length - 1] >
    blueShirtHeights[blueShirtHeights.length - 1]
  ) {
    return organizeStudents(redShirtHeights, blueShirtHeights);
  } else {
    return organizeStudents(blueShirtHeights, redShirtHeights);
  }

  return false;
}

//helper function
function organizeStudents(row1, row2) {
  for (let i = 0; i < row1.length; i++) {
    if (row1[i] <= row2[i]) {
      return false;
    }
  }
  return true;
}
