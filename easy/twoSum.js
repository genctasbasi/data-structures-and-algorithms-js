// Two Sum
// https://leetcode.com/problems/two-sum

/**
 * O(n2) solution - brute force
 */
var twoSum1 = function (nums, target) {
  for (var i = 0; i < nums.length; i++) {
    for (var j = 1; j < nums.length; j++) {
      var sum = nums[i] + nums[j];
      if (target == sum) return new Array(nums[i], nums[j]);
    }
  }

  return -1;
};

console.log(twoSum1([1, 2, 3, 0, -5, 20], 15));

/**
	O(n) is possible with (one-pass) hashtable
  Space complexity is also O(n)
*/
var twoSum2 = (nums, target) => {
  var map = new Map();
  for (var i = 0; i < nums.length; i++) {
    var num = nums[i];
    console.log("num: " + num);
    var complement = target - num;
    console.log(map.get(complement));

    if (map.get(complement) != undefined) {
      return new Array(i, map.get(complement));
    }

    map.set(num, i);
  }

  return new Array();
};

console.log(twoSum2([3, 3], 6));

/**
 * O(nlog(n)) solution is possible if we're allowed to sort.
 * Define 2 pointers from each end and make the window smaller with each loop.
 * This solution cannot be applied for the original Leetcode questions because
 * we're asked to return the indexes of the numbers, not the actual numbers.
 */
var twoSum3 = function (nums, target) {
  var sorted = nums.sort((n1, n2) => {
    return n1 - n2;
  });

  var pStart = 0;
  var pEnd = sorted.length - 1;

  while (pStart < pEnd) {
    var nStart = sorted[pStart];
    var nEnd = sorted[pEnd];

    console.log(sorted);
    console.log(nEnd);
    var sum = nStart + nEnd;
    if (sum == target) return new Array(nStart, nEnd);
    if (sum > target) pEnd--;
    if (sum < target) pStart++;
  }

  return -1;
};

console.log(twoSum3([1, 2, 3, 0, -5, 20], 15));
