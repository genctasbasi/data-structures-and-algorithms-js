class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? null : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

// [1, 2, 2, 3, 4, 4, 3]
var buildTree = (arr) => {
  if (arr.length == 0) return null;

  var root = new TreeNode();
  var nodeQueue = [];
  nodeQueue.push(root);

  for (var i = 0; i < arr.length; i++) {
    var val = arr[i];
    var node = nodeQueue.shift();
    if (node == null) continue;
    node.val = val;

    var nextLeftIndex = 2 * i + 1;
    var nextRightIndex = 2 * i + 2;

    if (arr[nextLeftIndex] == null) {
      nodeQueue.push(null);
    } else {
      node.left = new TreeNode();
      nodeQueue.push(node.left);
    }

    if (arr[nextRightIndex] == null) {
      nodeQueue.push(null);
    } else {
      node.right = new TreeNode();
      nodeQueue.push(node.right);
    }
  }

  return root;
};
