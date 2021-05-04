function indexEqualsValue(array) {
  for (let i = 0; i < array.length; i++) {
    if (i === array[i]) {
      return i;
    }
  }
  return -1;
}
