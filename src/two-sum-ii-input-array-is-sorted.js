//https://leetcode.com/problems/two-sum-ii-input-array-is-sorted
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    let first = -1;
    for(let i = 0 ; i < nums.length ; i++) {
        first = i;
        let j = target - nums[i];
        if(nums.indexOf(j, i + 1) !== -1) {
            return [first + 1, nums.indexOf(j, i + 1) + 1];
        }
    }
    return null;
};