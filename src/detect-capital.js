//https://leetcode.com/problems/detect-capital
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    let re = /^(([A-Z]){1,}|([a-z]){1,}|[A-Z]([a-z]){1,})$/g;
    if(re.test(word)) {
        return true;
    }
    return false;
};