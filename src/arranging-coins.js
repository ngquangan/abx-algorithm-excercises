//https://leetcode.com/problems/arranging-coins
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let d = 1 + 8*n;
    return parseInt((-1 + Math.sqrt(d)) / 2);
};