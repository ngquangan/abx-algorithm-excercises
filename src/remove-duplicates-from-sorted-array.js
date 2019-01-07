//https://leetcode.com/problems/remove-duplicates-from-sorted-array
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let cnt = 0
    let prev
    
    for (let i of nums) {
        if (prev !== i) {
            nums[cnt++] = i
            prev = i
        }
    }
    
    
    return cnt
};