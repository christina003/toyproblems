class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

function findSuccessor(tree, node) {
  //declare storageArray
  let storageArray = orderTree(tree);
  //in order traversal - L - N - R\

  //iterate through storage array
  for (let i = 0; i < storageArray.length; i++) {
    if (storageArray[i] !== node) continue;

    //if element === node
    //return element[index + i]
    //else
    //return null
    return storageArray[i + 1];
  }
}

function orderTree(node, order = []) {
  //base case, if node is null, return
  if (node === null) return order;

  //run order tree on left node first
  orderTree(node.left, order);
  //push node
  order.push(node);
  //run order tree on right node
  orderTree(node.right, order);

  //return order
  return order;
}
