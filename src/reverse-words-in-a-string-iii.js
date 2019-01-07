//https://leetcode.com/problems/reverse-words-in-a-string-iii
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let arrWords = s.split(" ");
    
    for( let i = 0 ; i < arrWords.length ; i++) {
        arrWords[i] = arrWords[i].split("").reverse().join("");
    }
    return arrWords.join(" ");
};