// binaryTreePreOrderTraversal
// https://leetcode.com/problems/binary-tree-preorder-traversal

/**
 * A simple pre-order traversal of a binary tree
 * Order is based on the root so pre-order means root-left wing-right wing
 */

var binaryTreePreOrderTraversal = function (root) {
  return traverse(root, []);
};

var traverse = function (root, returnArray) {
  if (root == null) return returnArray;

  // this is pre-order so root goes first:
  returnArray.push(root.val);
  traverse(root.left, returnArray);
  traverse(root.right, returnArray);
  return returnArray;
};

console.log(binaryTreePreOrderTraversal([1, null, 2, 3]));
