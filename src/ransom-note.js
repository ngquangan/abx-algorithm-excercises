//https://leetcode.com/problems/ransom-note
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let objR = {};
    let objM = {};
    for(let i = 0; i < magazine.length ;i++) {
        if(objM[magazine[i]]) {
            objM[magazine[i]]++;
        } else {
            objM[magazine[i]] = 1;
        }
    }
    
    for(let i = 0; i < ransomNote.length ;i++) {
        if(objR[ransomNote[i]]) {
            objR[ransomNote[i]]++;
        } else {
            objR[ransomNote[i]] = 1;
        }
    }
    
    let entries = Object.entries(objR);
    for(let i = 0 ; i < entries.length; i++) {
        if((objM[entries[i][0]] || 0) < entries[i][1]) {
            return false;
        }
    }
    
    return true;
};