/*Write a function that takes in the head of a Singly Linked List, reverses the list in place (i.e. doesn't create a brand new list) and then returns its new head. Each linkedlist node has an integer value as well as a next node pointing to the next node in the list or to None/null if it's the tail of the list. You can assume that the input Linked List will always have at least one node; in other words the head will never be none/null */

// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function reverseLinkedList(head) {
  let curr = head;
  let previous = null;

  while (curr) {
    let next = curr.next;
    curr.next = previous;
    previous = curr;
    curr = next;
  }

  return previous;
}
