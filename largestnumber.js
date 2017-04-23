//https://leetcode.com/problems/largest-number
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    //var result = "";
    nums.sort(compare);
    //result = nums.join("");
    for (var i = 0, result = ''; i <nums.length; result += nums[i++]) { }
    if(+result==0){
        return "0";
    }
    return result;
};

function compare(a,b){
    if(a==b)return 0;
    var ab = a+""+b;
    var ba = b+""+a;

    return +ab<+ba?1:-1;
}
