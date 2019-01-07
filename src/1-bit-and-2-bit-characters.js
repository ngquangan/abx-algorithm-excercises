//https://leetcode.com/problems/1-bit-and-2-bit-characters
/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    for(let i = 0 ; i < bits.length ;) {
        if(i === bits.length -1 ) {
            return true;
        }
        if(bits[i] === 0 ) {
            i++;
        }
        if(bits[i] === 1) {
            i+= 2;
        }
        
    }
    return false;
};
