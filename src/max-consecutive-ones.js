//https://leetcode.com/problems/max-consecutive-ones
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let pos = 0;
    let max = 0;
    for(let i = 0; i < nums.length ; i++) {
        if(nums[i] !== nums[i+1]) {
            let str = nums.slice(pos, i+1);
            if(str[0] ===1 && str.length > max) {
                max = str.length;
            }
            pos = i + 1;
        }
    }
    return max;
};