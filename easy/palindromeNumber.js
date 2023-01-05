// Palindrome number
// https://leetcode.com/problems/palindrome-number

/**
 * String solution
 */

var isPalindrome = (number) => {
  // negative numbers cannot be palindrome
  if (number < 0) return false;

  // all single digit numbers are palindrome
  if (number < 10) return true;

  var numberS = number + "";
  var pS = 0; // pointer start
  var pE = numberS.length - 1; // pointer end

  while (pS < pE) {
    var numberStart = numberS[pS];
    var numberEnd = numberS[pE];

    if (numberStart != numberEnd) return false;
    pS++;
    pE--;
  }

  return true;
};

console.log(isPalindrome(101));

// Another solution could be reversing the string and comparing with the original
