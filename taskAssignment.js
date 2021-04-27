function taskAssignment(k, tasks) {
  let results = [];
  let j = 0;
  let i = tasks.length - 1;

  let sorted = tasks.slice().sort((a, b) => a - b);

  while (j < i) {
    let indexOne = tasks.indexOf(sorted[j]);
    let indexTwo = tasks.indexOf(sorted[i]);
    results.push([indexOne, indexTwo]);
    tasks.splice(indexOne, 1, "a");
    tasks.splice(indexTwo, 1, "a");
    j++;
    i--;
  }

  return results;
}
