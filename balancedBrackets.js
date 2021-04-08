function balancedBrackets(string) {
  //create remaining closing brackets var
  let closingBrackets = [];
  const availableBrackets = ["[", "]", "{", "}", "(", ")"];
  const bracketTypes = {
    "[": "]",
    "{": "}",
    "(": ")",
  };
  //brackets object

  for (let i = 0; i < string.length; i++) {
    if (bracketTypes[string[i]]) {
      closingBrackets.unshift(bracketTypes[string[i]]);
      continue;
    } else if (string[i] === closingBrackets[0]) {
      closingBrackets.shift();
      continue;
    } else if (!availableBrackets.includes(string[i])) {
      continue;
    } else {
      return false;
    }
  }

  if (closingBrackets.length > 0) {
    return false;
  } else {
    return true;
  }
}

//iterate through the string
//check if it's an opening bracket
//if it is, then push opening bracket value to closing array
//if it doesn't exist in opening brackets obj
//then check if it's the most recently put in closed bracket
//if it's that closing bracket
//then remove from array
//if it's not
//return false

//if the remaining closing bracket array has length
//return false
//otherwise
//return true
