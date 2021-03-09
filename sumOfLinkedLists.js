/* You're given two Linked Lists of potentially unequal length. Each linked List represents a non-negative integer, where each node in the Linked List is a digit of that integer, and the first node in each LinkedList always represents the least significant digit of the integer. Write a function that returns the head of a new linked list that represents the sum of the integers represented by the two input linked lists */

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function sumOfLinkedLists(linkedListOne, linkedListTwo) {
  //declare dummy to begin new linked list
  let dummy = new LinkedList(0);
  //create curr variable to keep track of curr node
  let curr = dummy;
  //create var to keep track of the carried number
  let carry = 0;

  //for ease of typing - create variables to store nodeOne and nodeTwo
  let nodeOne = linkedListOne;
  let nodeTwo = linkedListTwo;

  //while nodeOne OR nodeTwo aren't null
  //and carry doesn't equal 0 - in case carry at end is greater than 0 will need to keep going
  while (nodeOne !== null || nodeTwo !== null || carry !== 0) {
    //values will either equal node value or 0
    let valueOne = nodeOne !== null ? nodeOne.value : 0;
    let valueTwo = nodeTwo !== null ? nodeTwo.value : 0;
    //add values together WITH carry
    let sum = valueOne + valueTwo + carry;
    //mod by 10 to get correct number
    let value = sum % 10;

    //create new node
    let newNode = new LinkedList(value);
    //assign curr.next to the new node
    curr.next = newNode;
    //assign curr to new node
    curr = newNode;

    //find carry by dividing sum by 10 and flooring it
    carry = Math.floor(sum / 10);
    //assign nodes
    nodeOne = nodeOne !== null ? nodeOne.next : null;
    nodeTwo = nodeTwo !== null ? nodeTwo.next : null;
  }
  //return original linkedlist head .next
  return dummy.next;
}
