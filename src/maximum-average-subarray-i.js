//https://leetcode.com/problems/maximum-average-subarray-i
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let sum = 0;
    for(let i = 0 ; i < k;i++) {
        sum += nums[i];
    }
    let temp = sum;
    for(let i = k; i < nums.length; i++) {
        temp += nums[i] - nums[i-k];
        sum = Math.max(temp, sum)
    }
    return sum/k;
};
