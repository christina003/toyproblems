/*You're given the head of a singly linked list whose nodes are in sorted order with respect to their values. write a function that returns a modified version of the linked list that doesn't contain any nodes with duplicate values. The linkedlist should be modified in place and the modified linked list should still have its nodes sorted with respect to their values */

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
  currentNode = linkedList;

  while (currentNode !== null) {
    notDup = currentNode.next;
    while (notDup !== null && notDup.value === currentNode.value) {
      notDup = notDup.next;
    }
    currentNode.next = notDup;
    currentNode = notDup;
  }
  return linkedList;
}
