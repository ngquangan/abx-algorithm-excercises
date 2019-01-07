//https://leetcode.com/problems/power-of-two
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    let lg2 = parseInt(Math.log(n) / Math.log(2));
    for(let i = lg2 - 1; i <= lg2; i++) {
        if(Math.pow(2, i) === n) {
            return true;
        }
    }
    return false;
};