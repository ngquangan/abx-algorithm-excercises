//https://leetcode.com/problems/largest-number-at-least-twice-of-others
/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let new_nums = [...nums];
    nums.sort((a,b) => a - b);
    let max = Math.max(...nums);
    let secondMax = Math.max(...nums.filter(num => num !== max));
    if(!(max >= 2*secondMax)) return -1;
    for(let i = 0 ; i < new_nums.length; i++) {
        if(new_nums[i] === max) return i;
    }
};