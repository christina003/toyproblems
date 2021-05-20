function minimumCharactersForWords(words) {
  let outerCharTracker = {};

  for (let i = 0; i < words.length; i++) {
    let innerCharTracker = {};
    for (let j = 0; j < words[i].length; j++) {
      if (innerCharTracker[words[i][j]] === undefined) {
        innerCharTracker[words[i][j]] = 1;
      } else {
        innerCharTracker[words[i][j]] = innerCharTracker[words[i][j]] + 1;
      }
      console.log(innerCharTracker);
    }

    outerCharTracker = updateOuterTracker(outerCharTracker, innerCharTracker);
  }
  console.log(outerCharTracker);
  return trackerToArray(outerCharTracker);
}

function updateOuterTracker(outer, inner) {
  for (let char in inner) {
    if (outer[char] < inner[char] || outer[char] === undefined) {
      outer[char] = inner[char];
    }
  }
  return outer;
}

function trackerToArray(tracker) {
  let result = [];

  for (let char in tracker) {
    while (tracker[char] > 0) {
      result.push(char);
      tracker[char] = tracker[char] - 1;
    }
  }

  return result;
}
