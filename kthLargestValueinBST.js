/* write a function that takes in a binary search tree and a positive integer k and returns the kth largest integer contained in the BST. You can assume that there will only be integer values in the BST and that k is less than or equal to the number of nodes in the tree. Also for the purpose of this question deuplicate integers will be treated as distinct values. In other words, the second largest value in a BST containing value {5, 7, 7} will be 7 --- not 5. */

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findKthLargestValueInBst(tree, k) {
  //brute force
  //create results array - largest to smallest
  let results = [];

  //recursive function
  const traverseTree = (node) => {
    //base case
    if (node === null) {
      return;
    }
    //in order traversal: right, parent, left
    //put inside results array
    traverseTree(node.right);
    results.push(node.value);
    traverseTree(node.left);
  };

  traverseTree(tree);

  return results[k - 1];
  //return array[k]

  //optimal
  //find greatest node
  //count up to k and return node at k - right, parent, left
}
