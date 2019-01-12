//https://leetcode.com/problems/reverse-string
/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    return reverse(s);  
};

let reverse = (s) => {
    let temp = "";
    for(let i = s.length - 1; i >= 0; i--) {
        temp += s[i];
    }
    return temp;
}