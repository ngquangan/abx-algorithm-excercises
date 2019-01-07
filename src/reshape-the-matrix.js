//https://leetcode.com/problems/reshape-the-matrix
/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
    if(r*c > nums.length * nums[0].length) return nums;
    return _.chunk(_.flatten(nums), c)
};