//https://leetcode.com/problems/longest-substring-without-repeating-characters
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let max = 0;
    let temp = 0;
    let obj = {};
    for(let i = 0 ; i < s.length; i++) {
        if(temp <= obj[s[i]]) {
            temp = obj[s[i]] + 1;
        } else {
            max = Math.max(max, i - temp + 1);
        }
        obj[s[i]] = i;
    }
    return max
};