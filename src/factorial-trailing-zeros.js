//https://leetcode.com/problems/factorial-trailing-zeroes
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    let count = 0
    for (let i = 5; i <= n; i *= 5) {
        count += parseInt(n / i)
    }
    return count;
};