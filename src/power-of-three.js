//https://leetcode.com/problems/power-of-three
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    let lg3 = parseInt(Math.log(n) / Math.log(3));
    for(let i = lg3 - 1; i <= lg3; i++) {
        if(Math.pow(3, i) === n) {
            return true;
        }
    }
    return false;
};