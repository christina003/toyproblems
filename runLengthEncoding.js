function runLengthEncoding(string) {
  //create result string
  //create count variable

  let result = "";
  let count = 1;

  for (let i = 0; i < string.length; i++) {
    let curr = string[i];
    let next = string[i + 1];

    if (curr === next && count < 9) {
      count++;
    } else {
      result += count + curr;
      count = 1;
    }
  }
  //iterate through string
  //if next is equal to current && count is less than 10
  //increment count
  //continue
  //if next is not equal to current
  //then add count + current character
  //reset count
  return result;

  //return result
}
