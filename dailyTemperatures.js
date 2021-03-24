var dailyTemperatures = function (T) {
  //declare result array

  //iterate over input array
  //second loop
  //if curr < nextElem
  //add 1 to result array
  //break
  //if it's not, then continue

  //very end of loop
  //add 0 to result array

  //return result array

  let results = [];

  for (let i = 0; i < T.length; i++) {
    let currElem = T[i];
    let dayCount = 1;
    for (let j = i + 1; j < T.length; j++) {
      if (j === T.length - 1 && currElem >= T[j]) {
        results.push(0);
      } else if (currElem < T[j]) {
        results.push(dayCount);
        break;
      } else if (currElem >= T[j]) {
        dayCount++;
        continue;
      }
    }
  }
  results.push(0);
  return results;
};
