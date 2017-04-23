//https://leetcode.com/problems/add-digits
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if(num>0)
    return num-9*Math.floor((num-1)/9);
    return 0;
};