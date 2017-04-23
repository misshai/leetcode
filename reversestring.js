//https://leetcode.com/problems/reverse-string
/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    for (var i = s.length - 1, o = ''; i >= 0; o += s[i--]) { }
  return o;
};