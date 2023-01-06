// symmetricTree
// https://leetcode.com/problems/symmetric-tree
import tree from "../model/treeNode";

var isSymmetric = function (treeNode) {
  if (treeNode == null) return true;

  var q = [];
  q.push(treeNode.left);
  q.push(treeNode.right);
  while (q.length > 0) {
    var leftNode = q.shift(); // as it's a queue
    var rightNode = q.shift();

    if (leftNode == null && rightNode == null) continue;
    if (leftNode == null || rightNode == null) return false;
    if (leftNode.val != rightNode.val) return false;

    // the order of this insertion is the reason why the comparison above is working
    // that's the tricky part
    if (leftNode != null) q.push(leftNode.left);
    if (rightNode != null) q.push(rightNode.right);
    if (leftNode != null) q.push(leftNode.right);
    if (rightNode != null) q.push(rightNode.left);
  }

  return true;
};

console.log(isSymmetric([1, 2, 2, 3, 4, 4, 3])); // true

console.log(
  test([1, 2, 2, 3, 4, 4, 3, 5, null, null, null, null, null, null, 5])
); // true

console.log(
  test([1, 2, 2, 3, 4, 4, 3, 5, null, null, null, null, null, null, 6])
); // false
