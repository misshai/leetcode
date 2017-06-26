//https://leetcode.com/problems/regular-expression-matching

var isMatch = function(s, p) {
    if(p.length=== 0)
            return s.length === 0;
         
        if(p.length == 1 || p[1] != '*'){
            if(s.length < 1 || (p[0] != '.' && s[0] != p[0]))
                return false;
            return isMatch(s.substring(1), p.substring(1));    
 
        }else{
            var len = s.length;
 
            var i = -1; 
            while(i<len && (i < 0 || p[0] == '.' || p[0] == s[i])){
                if(isMatch(s.substring(i+1), p.substring(2)))
                    return true;
                i++;
            }
            return false;
        } 
};