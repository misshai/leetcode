//https://leetcode.com/problems/count-and-say

var countAndSay = function(n) {
    let result="1";
    if (n==1) {return result};
    let count;
    let symbol;
    let input;
    for (let k=1; k<n; k++){
        input = result;
        symbol = input[0];
        count = 1;
        result = "";
        for(let m=1; m< input.length;m++){
            if (symbol == input[m]){
                count++;
            }else{
                result+=count.toString()+symbol;
                symbol = input[m];
                count = 1;
            }
        }
        result+=count.toString()+symbol;        
    }
    return result;
    
};