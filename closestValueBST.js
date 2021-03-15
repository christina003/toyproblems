/*write a function that takes in a binary search tree (BST) and a target integer value and returns the closest value to that target value contained in the BST. You can assume that there will only be one closest value*/

function findClosestValueInBst(tree, target) {
  let diff = Math.abs(target - tree.value);
  let nodeVal = tree.value;

  const findDifference = (node) => {
    if (node === null) {
      return;
    }

    let newDiff = Math.abs(target - node.value);
    if (newDiff < diff) {
      diff = newDiff;
      nodeVal = node.value;
    }
    findDifference(node.left);
    findDifference(node.right);
  };

  findDifference(tree.right);
  findDifference(tree.left);

  return nodeVal;
}
