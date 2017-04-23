//https://leetcode.com/problems/longest-valid-parentheses
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    var stack=[];
    var result = 0;
    for (var i=0;i<s.length;i++){
        if(s[i]=="("){
            stack.push([i,0]);
        }else {
            if(stack.length==0||stack[stack.length-1][1]==1){
                stack.push([i,1]);
            }else{
                var deleted = stack.pop();
                var currentLength;
                if(stack.length==0){
                    currentLength=i+1;
                }else{
                    currentLength = i -stack[stack.length-1][0];
                }
                result = Math.max(currentLength,result);
               
            }
            
        }
    }
    return result;
};