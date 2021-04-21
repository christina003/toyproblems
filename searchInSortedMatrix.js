function searchInSortedMatrix(matrix, target) {
  //iterate through the matrix
  //check if that array includes the target
  //if it does, then return the index of target
  //return array that has i and the index of targeet
  let result = [-1, -1];
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i].includes(target)) {
      let targetIndex = matrix[i].indexOf(target);
      result = [i, targetIndex];
    }
  }

  return result;
}

//not optimal solution
