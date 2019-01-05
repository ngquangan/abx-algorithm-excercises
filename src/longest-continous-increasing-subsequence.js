//https://leetcode.com/problems/longest-continuous-increasing-subsequence
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    let temp = 0;
    let max = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] >= nums[i+1] || nums[i+1] === undefined) {
            let arr = nums.slice(temp, i+1);
            max = arr.length > max ? arr.length : max;
            temp = i + 1;
        }
    }
    
    return max;
};