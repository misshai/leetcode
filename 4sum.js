https://leetcode.com/problems/4sum
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
 function compareNumbers(a, b) {
  return a - b;
}
var fourSum = function(nums, target) {
    if (!nums || nums.length<4){
        return [];
    }
    let result=[];
    nums=nums.sort(compareNumbers);
    for(let i=0;i<nums.length-3;i++){
        if(i!==0 && nums[i]==nums[i-1]){
            continue;
        }
        for(let k=i+1;k<nums.length-2;k++){
            if(k!=i+1 &&nums[k]==nums[k-1]){
                continue;
            }
            let m=k+1;
            let n=nums.length-1;
            while(m<n){
                if(nums[i]+nums[k]+nums[m]+nums[n]>target){
                    n--;
                }else if(nums[i]+nums[k]+nums[m]+nums[n]<target){
                    m++
                }else{
                    result.push([nums[i],nums[k],nums[m],nums[n]]);
                    n--;
                    m++;
                    while(m<n &&nums[n]==nums[n+1] ){
                        n--;
                    }
 
                    while(m<n &&nums[m]==nums[m-1]){
                        m++;
                    }
                }
            }
    }
    }
    
    return result;
    
};