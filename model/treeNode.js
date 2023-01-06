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
  var currentNode = root;
  for (var i = 0; i < arr.length; i++) {
    var nodeVal = arr[i];

    if (currentNode.val == undefined) {
      currentNode.val = nodeVal;
    } else if (currentNode.left == undefined) {
      var leftNode = new TreeNode(nodeVal);
      currentNode.left = leftNode;
    } else if (currentNode.right == undefined) {
      var rightNode = new TreeNode(nodeVal);
      currentNode.right = rightNode;
      currentNode = currentNode.left;
    }
  }

  return root;
};
