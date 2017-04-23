//https://leetcode.com/problems/subsets
 /**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {

    var result = [];
    for (var i = 0; i < nums.length; i++) {
        var temp = [];
        for (var m = 0; m < result.length; m++) {
            temp.push(result[m].slice());
        }
        
        for (var l = 0; l < temp.length; l++) {
            temp[l].push(nums[i]);
        }
        temp.push([nums[i]]);
        for (var k = 0; k < temp.length; k++) {
            result.push(temp[k]);
        }
       
    }
    
    result.push([]);
    return result;
};