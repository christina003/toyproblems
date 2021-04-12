function productSum(array, depth = 1) {
  let product = 0;

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      product += productSum(array[i], depth + 1);
    } else {
      product += array[i];
    }
  }

  return product * depth;
  //return product sum var
}
