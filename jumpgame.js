//https://leetcode.com/problems/jump-game
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    if(nums.length==1){
        return true;
    }
    var max = nums[0];
    for(var i=0; i<nums.length;i++){
        if(max<=i&&nums[i]===0){
            return false;
        }
        if(nums[i]+i>max){
            max=nums[i]+i;
        }
        if(max>=nums.length-1){
            return true;
        }
    }
    return false;
};