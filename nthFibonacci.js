/*The fibonacci sequence is defined as follows: the first number of the sequence is 0, the second number is 1, and the nth number is the sum of the (n-1) and (n-2)th numbers. Write a function that takes in an integer, n, and returns the nth Fibonacci number */

function getNthFib(n) {
  if (n === 0 || n === 1) {
    return 0;
  } else if (n === 2) {
    return 1;
  } else {
    return getNthFib(n - 1) + getNthFib(n - 2);
  }
}
