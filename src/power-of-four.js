//https://leetcode.com/problems/power-of-four
/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    let lg4 = parseInt(Math.log(num) / Math.log(4));
    for(let i = lg4 - 1; i <= lg4; i++) {
        if(Math.pow(4, i) === num) {
            return true;
        }
    }
    return false;
};