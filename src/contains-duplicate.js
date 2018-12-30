//https://leetcode.com/problems/contains-duplicate
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let obj = {}
    for (e of nums) {
        if (obj[e] === true) {
            return true
        }
        else {
            obj[e] = true
        }
    }
    return false
};