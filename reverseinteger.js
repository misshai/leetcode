//https://leetcode.com/problems/reverse-integer
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var multiplier = (x<0)?-1:1;
    var result = parseInt(x.toString().split("").reverse().join(""))*multiplier;
    return (result>=2147483651||result<=-2147483651)?0:result;
};