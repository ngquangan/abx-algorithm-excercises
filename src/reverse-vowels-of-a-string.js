//https://leetcode.com/problems/reverse-vowels-of-a-string
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let obj = [];
    
    for(let i = 0 ; i < s.length; i++) {
        if(checkVowel(s[i])) {
            obj.push(s[i]);
        }
    }
    return s.split('')
        .map(ch => checkVowel(ch) ? obj.pop() : ch).join("");
};

let checkVowel = (c) => {
    c = c.toLowerCase();
    return "ueoai".indexOf(c) !== -1;
}