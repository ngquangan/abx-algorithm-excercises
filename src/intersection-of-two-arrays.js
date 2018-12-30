//https://leetcode.com/problems/intersection-of-two-arrays
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    return Array.from(
        new Set(nums1.filter(x => nums2.indexOf(x) != -1)))
};