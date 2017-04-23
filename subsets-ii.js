//https://leetcode.com/problems/subsets-ii
 /**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {


    var result = [];
    var prev = [];
    nums.sort();
    for (var  i = nums.length-1; i >= 0; i--) {
        if (i == nums.length - 1 || nums[i] != nums[i + 1] || prev.length == 0) {
            prev = [];
            for (var m = 0; m < result.length; m++) {
                prev.push(result[m].slice());
            }
        }

        for (var l = 0; l < prev.length; l++) {
            prev[l].push(nums[i]);
        }
        if (i == nums.length - 1 || nums[i] != nums[i + 1]) {
            prev.push([nums[i]]);
        }
        for (var k = 0; k < prev.length; k++) {
            result.push(prev[k].slice());
        }

    }

    result.push([]);
  
    return result;

    
};