function validStartingCity(distances, fuel, mpg) {
  for (let i = 0; i < distances.length; i++) {
    if (isValid(distances, fuel, mpg, i)) {
      return i;
    }
  }
}

function isValid(distances, fuel, mpg, currCity) {
  let counter = 0;
  let travelMiles = 0;

  while (counter < distances.length - 1) {
    travelMiles += fuel[currCity] * mpg;

    if (
      travelMiles >= distances[currCity] &&
      currCity === distances.length - 1
    ) {
      travelMiles -= distances[currCity];
      currCity = 0;
      counter++;
    } else if (travelMiles >= distances[currCity]) {
      travelMiles -= distances[currCity];
      currCity++;
      counter++;
    } else {
      return false;
    }
  }
  return true;
}
