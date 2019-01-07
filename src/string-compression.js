//https://leetcode.com/problems/string-compression
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let count = 1
    let prev  = chars[0]
    let size = 0
    
    for (let i = 1; i < chars.length; i++) {
        let ch = chars[i];
        
        if (prev === ch) {
            ++count
        }
        else {
            chars[size++] = prev
            
            if (count > 1) {
                count.toString().split('').forEach(c => chars[size++] = c)
            }
            prev = ch
            count = 1
        }
    }
    
    chars[size++] = prev
    if (count > 1) {
        count.toString().split('').forEach(c => chars[size++] = c)
    }
    return size
};