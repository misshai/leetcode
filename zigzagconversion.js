//https://leetcode.com/problems/zigzag-conversion
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    var result="";
    if(numRows==1){
        return s;
    }
    var step = numRows*2-2;
    for(var i=0;i<numRows;i++){
        if(i===0||i==numRows-1){
            for(var k=0;i+k<s.length;k+=step){
                result+=s[i+k];
            }
        }else {var j = i;
			var flag = true;
			var step1 = 2 * (numRows - 1 - i);
			var step2 = step - step1;
 
			while (j < s.length) {
			result+=s[j];
				if (flag)
					j = j + step1;
				else
					j = j + step2;
				flag = !flag;
			}
        }
    }
    return result;
};