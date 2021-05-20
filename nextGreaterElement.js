function nextGreaterElement(array) {
  let results = [];

  for (let i = 0; i < array.length; i++) {
    let currElem = array[i];
    let startIndex = i + 1;
    let found = false;
    while (startIndex !== i) {
      if (startIndex >= array.length) {
        startIndex = 0;
        continue;
      }
      if (currElem < array[startIndex]) {
        results.push(array[startIndex]);
        found = true;
        break;
      } else {
        startIndex++;
      }
    }

    if (found === false) results.push(-1);
  }
  return results;
}
