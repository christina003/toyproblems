function generateDocument(characters, document) {
  //count characters

  if (!document.length) {
    return true;
  }

  let charTracker = characterCount(characters);
  let documentTracker = characterCount(document);

  for (char in documentTracker) {
    console.log(charTracker);
    if (!charTracker[char]) {
      return false;
    } else if (charTracker[char]) {
      if (charTracker[char] < documentTracker[char]) {
        return false;
      }
    }
  }
  //check characters between two objects
  //if characters in characters is less than document
  //return false

  return true;
}

function characterCount(str) {
  let charTracker = {};

  for (let i = 0; i < str.length; i++) {
    if (charTracker[str[i]] === undefined) {
      charTracker[str[i]] = 1;
    } else {
      charTracker[str[i]] = charTracker[str[i]] += 1;
    }
  }

  return charTracker;
}
