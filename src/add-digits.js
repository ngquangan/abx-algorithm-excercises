//https://leetcode.com/problems/add-digits
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let sum = num;
    while(true) {
        sum = sum.toString().split("").reduce((prev, current) => {
            return (+prev) + (+current);   
        });
        
        if(sum < 10) {
            return sum;
        }
    }

};