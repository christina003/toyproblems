// This is the class of the input root.
// Do not edit it.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
  //create a results array
  let results = [];

  const depthSum = (node, sum) => {
    sum += node.value;

    if (node.left === null && node.right === null) {
      results.push(sum);
    } else {
      if (node.left !== null) {
        depthSum(node.left, sum);
      }
      if (node.right !== null) {
        depthSum(node.right, sum);
      }
    }
  };

  depthSum(root, 0);
  return results;
  //return results
}
