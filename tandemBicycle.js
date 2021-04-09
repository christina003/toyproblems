function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  //sort the arrays
  //declare speed var
  redShirtSpeeds.sort((a, b) => a - b);
  blueShirtSpeeds.sort((a, b) => a - b);

  let speed = 0;

  if (fastest) {
    redShirtSpeeds.reverse();
  }

  for (let i = 0; i < redShirtSpeeds.length; i++) {
    let max = Math.max(redShirtSpeeds[i], blueShirtSpeeds[i]);
    speed += max;
  }

  return speed;
}
