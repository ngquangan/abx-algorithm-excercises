//https://leetcode.com/problems/number-of-segments-in-a-string
/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    if(s.trim() === "") return 0;
    return s.trim().split(/\s+/).length;
};