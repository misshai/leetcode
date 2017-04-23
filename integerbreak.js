//https://leetcode.com/problems/integer-break
/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    if(n==2){
        return 1;
    }else if(n==3){
        return 2;
    }else if(n==4){
        return 4;
    }
    else if(n>4){
    if(n%3==0){
    return Math.pow(3,Math.floor(n/3));
    
    }else if(n%3==1){

        return Math.pow(3,Math.floor(n/3-1))*(4);
    }else {
        return Math.pow(3,Math.floor(n/3))*(n%3);
    }
        
    }
        
    };