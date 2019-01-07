//https://leetcode.com/problems/first-unique-character-in-a-string
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let obj = {};
    
    for(let i = 0 ; i < s.length ; i++) {
        if(obj[s[i]]) {
            obj[s[i]] = obj[s[i]] + 1;
        } else {
            obj[s[i]] = 1;
        }
    }
    
    let entries = Object.entries(obj);
    
    for(let i = 0 ; i < entries.length ; i++) {
        if(entries[i][1] === 1) {
            return s.indexOf(entries[i][0]);
        }
    }
    
    return -1;
    
};