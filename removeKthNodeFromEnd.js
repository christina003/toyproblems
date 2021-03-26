/*Write a function that takes in the head of a singly leaked list and an integer k and removes the kth node from the end of the list. The removal should be done in place, meaning that the original data structure should be mutated. Furthermore, the input head of the linked list should remain the head of the linked list after the removal is done, even if the head node is the node that's supposed to be removed. In other words, if the head is the node that's supposed to be removed, your function should simply mutate its value and next pointer. */

// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeKthNodeFromEnd(head, k) {
  //go through linked list with counter, until we hit end
  //after end subtract counter - k
  //that difference will be the node to remove
  let length = findLength(head, 0);
  let nodeToRemove = length - k;

  return removeNode(head, nodeToRemove);
}

function removeNode(node, remove) {
  let curr = node;
  let prev = null;
  if (curr.value === remove) {
    curr.value = curr.next.value;
    curr.next = curr.next.next;
    return node;
  }
  while (curr) {
    if (curr.value === remove) {
      prev.next = curr.next;
      return node;
    } else {
      prev = curr;
      curr = curr.next;
    }
  }

  return node;
}
//find linkedlist length
function findLength(node, counter) {
  if (node === null) {
    return counter;
  } else {
    counter++;
    return findLength(node.next, counter);
  }
}
