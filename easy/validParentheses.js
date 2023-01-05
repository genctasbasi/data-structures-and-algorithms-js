// Valid parentheses
// https://leetcode.com/problems/valid-parentheses

/**
 *
 */
var validParentheses = (s) => {
  var stack = [];
  var len = s.length;

  for (var i = 0; i < len; i++) {
    var char = s[i];
    if (char == "(" || char == "{" || char == "[") {
      stack.push(char);
    } else {
      var pop = stack.pop();

      if (char == ")") {
        if (pop != "(") return false;
      } else if (char == "}") {
        if (pop != "{") return false;
      } else if (char == "]") {
        if (pop != "[") return false;
      } else {
        return false;
      }
    }
  }

  return stack.length == 0;
};

console.log(validParentheses("("));
console.log(validParentheses("(("));
console.log(validParentheses("()[]{}"));
console.log(validParentheses("(]"));
