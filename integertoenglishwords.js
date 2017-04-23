//https://leetcode.com/problems/integer-to-english-words
/**
 * @param {number} num
 * @return {string}
 */
 var map=[];
var numberToWords = function(num) {
    fillMap();
        var result="";
        if(num===0){
            return map[0];
        }
 
        if(num >= 1000000000){
            var extra = Math.floor(num/1000000000);
            result+=(convert(extra) + " Billion");
            num = num%1000000000;
        }
 
        if(num >= 1000000){
            extra = Math.floor(num/1000000);
            result+=(convert(extra) + " Million");
            num = num%1000000;
        } 
 
        if(num >= 1000){
            extra =Math.floor( num/1000);
            result+=(convert(extra) + " Thousand");
            num = num%1000;
        } 
 
        if(num > 0){
            result+=(convert(num));
        }
 
        return result.trim();
    };
 
    function convert( num){
 
        var result="";
 
        if(num>=100){
            var numHundred = Math.floor(num/100);
           
            result+=(" " +map[numHundred]+ " Hundred");
            num=num%100;
            
        }
 
        if(num > 0){
            if(num>0 && num<=20){
                result+=(" "+map[num]);
            }else{
                var numTen = Math.floor(num/10);
                result+=(" "+map[numTen*10]);
 
                var numOne=num%10;
                if(numOne>0){
                    result+=(" " + map[numOne]);
                }
            }
        }
 
        return result;
    }
 
    function fillMap(){
        map.push("Zero");
        map.push( "One");
        map.push( "Two");
        map.push( "Three");
        map.push( "Four");
        map.push( "Five");
        map.push( "Six");
        map.push( "Seven");
        map.push( "Eight");
        map.push( "Nine");
        map.push( "Ten");
        map.push( "Eleven");
        map.push( "Twelve");
        map.push( "Thirteen");
        map.push( "Fourteen");
        map.push( "Fifteen");
        map.push( "Sixteen");
        map.push( "Seventeen");
        map.push( "Eighteen");
        map.push( "Nineteen");
        map.push("Twenty");
        map[30]= "Thirty";
        map[40]= "Forty";
        map[50]= "Fifty";
        map[60]= "Sixty";
        map[70]= "Seventy";
        map[80]= "Eighty";
        map[90] ="Ninety";
    }