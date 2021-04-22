function arrayOfProducts(array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    let j = 0;
    let product = 1;
    while (j < array.length) {
      if (j !== i) {
        product = product * array[j];
        j++;
      } else {
        j++;
      }
    }

    result[i] = product;
  }
  return result;
}
