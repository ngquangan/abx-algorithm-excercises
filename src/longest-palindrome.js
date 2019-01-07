//https://leetcode.com/problems/longest-palindrome/
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let v = Object.values( _.countBy(s));
    return v.reduce((acc, e) => {
        return acc + parseInt(parseInt(e / 2) * 2);
    }, 0) + (v.some(i => i % 2 !== 0) ? 1 : 0)
};