//https://leetcode.com/problems/base-7
/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
    if(num === 0) return "0";
    let s = "";
    let temp = num;
    num = num < 0 ? -num : num;
    while(num) {
        s = (num%7) + s;
        num = parseInt(num/7);
    }
   if(temp < 0) return "-"+ s;
    return s;
};