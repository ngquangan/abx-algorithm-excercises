//https://leetcode.com/problems/next-greater-element-i
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    return nums1.map(e => {
        let index = nums2.indexOf(e);
        return nums2.slice(index).find(num => num > e) || -1;      
    });
};