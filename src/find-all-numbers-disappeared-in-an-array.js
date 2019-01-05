//https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let setNum = new Set(nums);
    return _.range(1, nums.length + 1).filter(num => !setNum.has(num));  
};