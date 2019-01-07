//https://leetcode.com/problems/excel-sheet-column-number
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    let str = {};
    let count = 0;
    for(let i = 65; i <= 90; i++) {
        str[String.fromCharCode(i)] = i - 64;
    }
    
    for(let i = 0 ; i < s.length ;i++) {
        count+= str[s[i]]*Math.pow(26,s.length - 1 - i);
    }
    return count;
};