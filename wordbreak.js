//https://leetcode.com/problems/word-break
/**
 * @param {string} s
 * @param {set<string>} wordDict
 *   Note: wordDict is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    var result = [];
    for(var i=0;i<=s.length;i++){
        result.push(-1);
    }
    result[0]=0;
    
    for (var k=0;k<s.length;k++){
        if(result[k]!=-1){
            
            for (var m=k+1;m<=s.length;m++){
            
            
            if(wordDict.has(s.substring(k,m))){
                    result[m]=0;
                    
                }
            }    
        }
            
    }
    
    return result[s.length]!=-1;
    
    
    
};