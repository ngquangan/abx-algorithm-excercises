//https://leetcode.com/problems/happy-number
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    
    let obj = {};
    
    while(true) {
        n = n.toString().split("").reduce((prev, current) => {
            return prev + current*current;  
        }, 0);
        
        if(obj[n]) {
            return false;
        }
        
        obj[n] = 1;
        
        if(n === 1) {
            return true;
        }
    }
    
    return false;
};