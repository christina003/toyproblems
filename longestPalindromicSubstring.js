function longestPalindromicSubstring(string) {
  let longest = "";

  if (string.length <= 1) {
    return string;
  }

  for (let i = 0; i < string.length; i++) {
    let curr = string[i];

    let j = i + 1;

    while (j < string.length) {
      curr += string[j];

      if (checkPalindrome(curr)) {
        if (curr.length > longest.length) {
          longest = curr;
        }
      }
      j++;
    }
  }

  return longest;
}

function checkPalindrome(s) {
  let p = s.split("").reverse().join("");
  return p === s;
}
