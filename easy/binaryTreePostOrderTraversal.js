// binaryTreePostOrderTraversal
// https://leetcode.com/problems/binary-tree-postorder-traversal

/**
 * A simple post-order traversal of a binary tree
 * Order is based on the root so post-order means left-right-root
 */

var binaryTreePostOrderTraversal = function (root) {
  return traverse(root, []);
};

var traverse = function (root, returnArray) {
  if (root == null) return returnArray;

  traverse(root.left, returnArray);
  traverse(root.right, returnArray);

  // this is post-order so root goes last:
  returnArray.push(root.val);
  return returnArray;
};

console.log(binaryTreePostOrderTraversal([1, null, 2, 3]));
