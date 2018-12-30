//https://leetcode.com/problems/power-of-four
/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    return parseInt(Math.log(num) / Math.log(4)) === Math.log(num) / Math.log(4);
};