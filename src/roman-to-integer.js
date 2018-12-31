//https://leetcode.com/problems/roman-to-integer
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let num = 0;
    let obj = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    
    for(let i = 0 ; i < s.length ; i++) {
        num += obj[s[i]];
        if( i > 0 && obj[s[i]] > obj[s[i-1]]) {
            num -= 2 * obj[s[i-1]]
        }
    }

    return num;
    
};