//https://leetcode.com/problems/search-insert-position
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let length = nums.length; 
    if(target <= nums[0]) return 0;
    if(target > nums[length - 1]) return length;
    if(length === 1) {
        if(target <= nums[0]) return 0;
        if(target >= nums[0]) return 1;
    }
    for(let i = 0 ; i < length - 1 ;i++) {
        if(nums[i] <= target && target <= nums[i + 1]) {
            return i + 1;
        }
    }
};