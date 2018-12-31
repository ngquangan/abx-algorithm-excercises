//https://leetcode.com/problems/student-attendance-record-i
/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    
    return !(s.indexOf("LLL") !== -1 || s.indexOf('A') !== s.lastIndexOf('A'));
};