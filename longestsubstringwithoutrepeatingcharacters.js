//https://leetcode.com/problems/longest-substring-without-repeating-characters
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
if (s==="") return 0;
  var result=1;
  var prevResult=1;
  var chars=[]
  chars[s[0]]=0;
  var prevIndx;
  for (var k=1;k<s.length;k++){
      prevIndx=chars[s[k]];
      
      if (prevIndx === undefined || k - result > prevIndx){
            result++;
      }else{
         if (result > prevResult)
                prevResult = result;
 
            result = k - prevIndx; 
      }
      
      chars[s[k]]=k;
      
        
 
  }
  return prevResult>result?prevResult:result;

}
;