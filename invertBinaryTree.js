/*write a function that takes in a binary tree and inverts it. In other words, the function should swap every left node in the tree for its corresponding right node */

function invertBinaryTree(tree) {
  if (!tree) {
    return;
  } else {
    let tmp = tree.left;
    tree.left = tree.right;
    tree.right = tmp;
    invertBinaryTree(tree.left);
    invertBinaryTree(tree.right);
  }
}
