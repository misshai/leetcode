//https://leetcode.com/problems/plus-one
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    
  
    digits[digits.length-1]+=1;
    for(var i=digits.length-1;i>=0;i--){
       if(digits[i]>9){
           digits[i]=0;
           if(digits[i-1]){
                digits[i-1]+=1;
           }else{
               digits.splice(0, 0, 1);
           }
       }
       else{
           return digits;
       }
    }
    return digits;
};

