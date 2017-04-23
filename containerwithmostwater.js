//https://leetcode.com/problems/container-with-most-water
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    if(height.length===0){
        return 0;
    }
    
    var max=0,
    left=0,
    right=height.length-1;
    while(left<right){
        max= Math.max(max,(right-left)*Math.min(height[left],height[right]));
        if(height[left]<height[right]){
            left++;
        }else{
            right--;
        }
    }
    return max;
};