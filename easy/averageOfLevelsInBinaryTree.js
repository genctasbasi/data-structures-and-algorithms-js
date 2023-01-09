// average-of-levels-in-binary-tree
// https://leetcode.com/problems/average-of-levels-in-binary-tree
// Similar to binaryTreeLevelOrder and binaryTreeLevelOrder2 questions. However we solve this one in a different way,
// still BFS but using an inner loop to loop the nodes that are on the same level, rather than using a map
import tree from "../model/treeNode";
/**
 *
 */
var averageOfLevelsInBinaryTree = (param) => {
  var tree = buildTree(root);
  var q = [];
  var result = [];
  q.push(tree);

  while (q.length > 0) {
    var newQ = [];
    var total = 0;
    var count = 0;

    while (q.length > 0) {
      // go through all nodes. All these nodes are on the same level
      var node = q.shift();

      if (node.val != null) {
        total = total + node.val;
        count++;
        if (node.left != null) newQ.push(node.left);
        if (node.right != null) newQ.push(node.right);
      }
    } // while

    result.push(total / count);
    q = newQ;
  }

  return result;
};

console.log(averageOfLevelsInBinaryTree([3, 9, 20, null, null, 15, 7]));
