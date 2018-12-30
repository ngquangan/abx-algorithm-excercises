//https://leetcode.com/problems/find-the-difference
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let o1 = {};
    let o2 = {};
    [...s].forEach(c => o1[c] = (o1[c] || 0) + 1);
    [...t].forEach(c => o2[c] = (o2[c] || 0) + 1);
    return Object.keys(o2)
        .find(k => (o2[k] || 0) - (o1[k] || 0) === 1);
};