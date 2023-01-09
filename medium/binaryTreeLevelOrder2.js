// binary-tree-level-order-traversal
// https://leetcode.com/problems/binary-tree-level-order-traversal-ii
// This is pretty much the same question with binaryTreeLevelOrder.js, we just need to reverse the result array before returning
// or simply use Array.splice as seen in this file.
import tree from "../model/treeNode";
/**
 *
 */
var levelOrder = (param) => {
  var tree = buildTree(arr);
  var queue = [];

  // a second queue is needed to keep the level of the nodes
  // an alternative could be keeping the level of a node as a node property
  var levelQueue = [];
  var map = new Map();

  queue.push(tree);
  levelQueue.push(0);

  while (queue.length > 0) {
    var node = queue.shift();
    var level = levelQueue.shift();

    if (node != null) {
      if (map.get(level) == null) map.set(level, new Array());
      if (node.val != null) map.get(level).push(node.val);
      if (node.left != null) {
        levelQueue.push(level + 1);
        queue.push(node.left);
      }

      if (node.right != null) {
        levelQueue.push(level + 1);
        queue.push(node.right);
      }
    }
  }

  var result = [];

  for (const [key, value] of map.entries()) {
    result.splice(0, 0, value);
  }

  return result;
};

console.log(levelOrder([3, 9, 20, null, null, 15, 7]));
