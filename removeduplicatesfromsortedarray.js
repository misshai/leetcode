//https://leetcode.com/problems/remove-duplicates-from-sorted-array
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
   
    for(var i=1;i<nums.length;i++){
        if(nums[i]==nums[i-1]){
            nums.splice(i,1);
            i--;
        }
    }
    return nums.length;
};