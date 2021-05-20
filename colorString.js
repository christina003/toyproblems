//given a string of colors in varying cases, return how many of each color there is

function colorString(str) {
  let colorArray = str.split(", ");
  let colorTracker = {};

  for (let i = 0; i < colorArray.length; i++) {
    let lowerCaseColor = colorArray[i].toLowerCase();

    if (colorTracker[lowerCaseColor] === undefined) {
      colorTracker[lowerCaseColor] = 1;
    } else {
      colorTracker[lowerCaseColor] = colorTracker[lowerCaseColor] + 1;
    }
  }

  let resultString = trackerToString(colorTracker);

  return resultString;
}

function trackerToString(tracker) {
  let str = "";
  for (color in tracker) {
    str += `${color}: ${tracker[color]}, `;
  }

  return str.substring(0, str.length - 2);
}

let test =
  "blUE, reD, grEEn, BLUE, BluE, grEeN, Red, RED, blue, GReen, red, bLUE, rED, green";

console.log(colorString(test));

//output should be: "blue: 5, red: 5, green: 4";
