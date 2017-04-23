/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
     while(s.indexOf("[]")!=-1||s.indexOf("{}")!=-1||s.indexOf("()")!=-1){
        if(s.indexOf("[]")!=-1){
            s=s.split("[]").join("");
        }
        if(s.indexOf("()")!=-1){
            s=s.split("()").join("");
        }
        if(s.indexOf("{}")!=-1){
            s=s.split("{}").join("");
        }
    }
    
    return s==="";
    
};