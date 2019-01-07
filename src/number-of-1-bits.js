//https://leetcode.com/problems/number-of-1-bits
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let str = n.toString(2);
    length = str.length;
    for(let i = 1; i <= 32 - length ; i++) {
        str = "0" + str;
    }
    
    return str.split("").reduce((prev, current) => current === "1" ? ++prev : prev, 0);
};