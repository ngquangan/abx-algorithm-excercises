//https://leetcode.com/problems/hamming-distance
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let x_binary = x.toString(2);
    let y_binary = y.toString(2);
    let count = 0;
    let d = x_binary.length - y_binary.length;
    
    if(d > 0) {
        
        for(let i = 0; i < d; i++) {
            y_binary = "0" + y_binary;
        }
        
    } else {
        
        for(let i = 0; i < -d; i++) {
            x_binary = "0" + x_binary;
        }
        
    }
    
    for(let i = 0; i < x_binary.length; i++) {
        
        if(x_binary[i] !== y_binary[i]) {
            count++;
        }
        
    }
    
    return count;
    
};