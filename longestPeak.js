function longestPeak(array) {
  let longestPeak = 0;

  for (let i = 1; i < array.length; i++) {
    let newPeak;
    if (array[i] > array[i - 1] && array[i] > array[i + 1]) {
      newPeak = peakLength(i, array);
    }
    if (newPeak > longestPeak) {
      longestPeak = newPeak;
    }
  }
  return longestPeak;
}

function peakLength(tip, array) {
  let increaseCount = 0;
  let decreaseCount = 1;
  for (let i = tip - 1; i >= 0; i--) {
    if (array[i] < array[i + 1]) {
      increaseCount++;
    } else {
      break;
    }
  }

  for (let j = tip; j < array.length; j++) {
    if (array[j] > array[j + 1]) {
      decreaseCount++;
    } else {
      break;
    }
  }
  let sum = decreaseCount + increaseCount;

  return sum;
}
