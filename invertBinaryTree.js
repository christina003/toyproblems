/*write a function that takes in a binary tree and inverts it. In other words, the function should swap every left node in the tree for its corresponding right node */

function invertBinaryTree(tree) {
  //base case
  //if no tree then return
  if (!tree) {
    return;
  } else {
    //create temp variable to hold left node
    let tmp = tree.left;
    //set left to equal right
    tree.left = tree.right;
    //set right to equal left
    tree.right = tmp;
    //call function on left and right
    invertBinaryTree(tree.left);
    invertBinaryTree(tree.right);
  }
}
