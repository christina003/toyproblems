/* write a function that takes in a non-empty string and that returns a boolean representing whether the string is a palindrome. */

function isPalindrome(string) {
  const reverseString = string.split("").reverse().join("");

  if (string === reverseString) {
    return true;
  }
  return false;
}
