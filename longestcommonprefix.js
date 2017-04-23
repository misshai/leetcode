//https://leetcode.com/problems/longest-common-prefix
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length<1) return "";
    var prefix = strs[0];
    
    for (var i=1;i<strs.length;i++){
        prefix = comm(prefix,strs[i]);
    }
    return prefix;
    
    
};

 function comm (str1,str2){
    var len =Math.min(str1.length, str2.length);
    var result = "";
    for (var m=0; m<len;m++){
        if(str1[m]!=str2[m]){
            return result;
        }
        result+=str1[m];
    }
    return result;
}