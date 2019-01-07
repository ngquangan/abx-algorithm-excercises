//https://leetcode.com/problems/range-addition-ii
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
    return Math.min(m, ...ops.map(op => op[0])) * Math.min(n, ...ops.map(op => op[1]));
};