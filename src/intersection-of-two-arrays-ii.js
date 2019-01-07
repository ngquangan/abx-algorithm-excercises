//https://leetcode.com/problems/intersection-of-two-arrays-ii
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let m1 = _.countBy(nums1);
    let m2 = _.countBy(nums2);
    
    return Object.keys(m1).map(k => {
        return Array(Math.min(m1[k], m2[k] || 0)).fill(k);
    }).reduce((acc, e) => [...acc, ...e], []);
};