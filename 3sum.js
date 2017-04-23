//https://leetcode.com/problems/3sum
var threeSum = function(nums) {

    if(nums.length<3){
        return [];
    }
    nums.sort(sortNumber);
    var result=[],
        j,k;
    for(var i=0;i<nums.length;i++){
        if(i===0 || nums[i] > nums[i-1]) {
            j = i + 1;
            k = nums.length - 1;
            while (k > j) {
                if (nums[i] + nums[j] + nums[k] === 0) {
                    result.push([nums[i], nums[j], nums[k]]);
j++;
k--;
                while (k>j && nums[j] == nums[j-1]) {
                    j++;
                }

                while (k>j && nums[k +1] == nums[k]) {
                    k--;
                } 
                
                }else
               
                if(nums[i] + nums[j] + nums[k]>0){
                    k--;
                }else{
                    j++;
                }

            }
        }
    }
  
    return result;
};

function sortNumber(a,b) {
    return a - b;
}