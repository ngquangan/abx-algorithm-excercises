//https://leetcode.com/problems/binary-number-with-alternating-bits
/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    let n_binary = n.toString(2);
    for(let i = 0 ; i < n_binary.length; i++) {
        if(i % 2 === 1 && n_binary[i] !== "0") return false;
        if(i % 2 === 0 && n_binary[i] !== "1") return false;
    }
    return true;
};