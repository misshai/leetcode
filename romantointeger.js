//https://leetcode.com/problems/roman-to-integer
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var result=0;
    var databaze = {
        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000
    }
    var length  = s.length;
    for(var k=0;k<length;k++){
        var current = databaze[s[k]];
        
        if(k+1<length){
            next=databaze[s[k+1]];
            if(current>=next){
                result+=current;
            }else{
               
                result+=next-current;
                 k++;
            }
        }else{
            result+=current;
            k++;
           
        }
    }
    return result;
    
};