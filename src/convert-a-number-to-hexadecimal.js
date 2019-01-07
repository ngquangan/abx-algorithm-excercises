//https://leetcode.com/problems/convert-a-number-to-hexadecimal
/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    let arr = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];
    let hex = "";
    
    if(num === 0) return "0";
    num = num < 0 ? num + Math.pow(2,32) : num;
    
    while(num !== 0) {
        hex = arr[num%16] + hex + "";
        num = parseInt(num/16);
    }
    
    return hex;
    
};