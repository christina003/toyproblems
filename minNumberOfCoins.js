//not passing all test cases

function minNumberOfCoinsForChange(n, denoms) {
  //declare count var
  let sortedDenoms = denoms.sort((a, b) => a - b);
  let count = 0;
  //currentChange = 0;
  let i = sortedDenoms.length - 1;

  while (i > -1) {
    console.log(sortedDenoms[i], n, count);
    if (n < sortedDenoms[i]) {
      i--;
    } else if (n > sortedDenoms[i]) {
      n = n - sortedDenoms[i];
      count++;
      continue;
    } else {
      count++;
      break;
    }
  }

  if (count < 0) {
    return -1;
  } else {
    return count;
  }
}
