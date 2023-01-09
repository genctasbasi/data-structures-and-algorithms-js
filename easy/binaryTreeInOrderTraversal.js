// binaryTreeInOrderTraversal
// https://leetcode.com/problems/binary-tree-inorder-traversal

/**
 * A simple in-order traversal of a binary tree
 * Order is based on the root so in-order means left-root-right
 * IN-ORDER: from left to right
 */

var binaryTreeInOrderTraversal = function (root) {
  return traverse(root, []);
};

var traverse = function (root, returnArray) {
  if (root == null) return returnArray;

  traverse(root.left, returnArray);

  // this is in-order so root goes between left and right
  returnArray.push(root.val);

  traverse(root.right, returnArray);
  return returnArray;
};

console.log(binaryTreeInOrderTraversal([1, null, 2, 3]));
