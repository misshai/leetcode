//https://leetcode.com/problems/word-break-ii
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
            var word = s.substring(k,m);
            
            if(wordDict.has(word)){
                if(result[m]==-1){
                    result[m]=[];
                }
                    result[m].push(word);
                    
                }
            }    
        }
            
    }
    
    if (result[s.length]==-1){
        return [];
    }else{
        
    var m=[];
     dfs(result , m, "", s.length);
     return m;
    }
    
    
};

function dfs(inbox , result, str, i){
    if(i==0){
        result.push(str.trim());
        return;
    }
 
    for(var g in inbox[i]){
        var combined = inbox[i][g] + " "+ str;
        dfs(inbox, result, combined, i-inbox[i][g].length);
}
}