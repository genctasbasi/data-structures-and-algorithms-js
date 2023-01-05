// Climbing stairs
// https://leetcode.com/problems/climbing-stairs

/**
 * No memoization version - times out for n = 25
 */
var memo = new Map();
var climbStairs = function (n) {
  // base cases.
  // if we have 1 stair left, there is only one way to climb it
  // if we have 2 stair left, there are only two ways to climb it
  if (n == 1) return 1;
  if (n == 2) return 2;

  // memoization is needed in order to avoid making the same calculations again and again
  if (memo[n] != undefined) return memo[n];

  var take1Step = climbStairs(n - 1);
  memo[n - 1] = take1Step;

  var take2Step = climbStairs(n - 2);
  memo[n - 2] = take2Step;

  return take1Step + take2Step;
};
console.log(climbingStairs(3));
