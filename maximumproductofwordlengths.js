//https://leetcode.com/problems/maximum-product-of-word-lengths
/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
    
    if(words==null || words.length==0)
        return 0;
 
    var arr = [];    
    for(var i=0; i<words.length; i++){
        for(var j=0; j<words[i].length; j++){
            var c = words[i].charCodeAt(j);
            
            arr[i] |= (1<< (c-'a'.charCodeAt(0)));
            
        }
    }    
 
    var result = 0;
 
    for(var i=0; i<words.length; i++){
        for(var j=i+1; j<words.length; j++){
            if((arr[i] & arr[j]) == 0){
                result = Math.max(result, words[i].length*words[j].length);
            }
        }
    }
 
    return result;
    
};