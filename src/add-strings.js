//https://leetcode.com/problems/add-strings
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    
    let d = num1.length - num2.length;
    let carry = 0;
    let tong = "";
    if(d > 0) {
        for(let i = 0 ; i < d; i++) {
            num2 = "0" + num2;
        }
    } else {
        for(let i = 0 ; i < -d; i++) {
            num1 = "0" + num1;
        }
    }
    
    for(let i = num1.length - 1 ; i >= 0 ; i--) {
        let s = (parseInt(num1[i]) + parseInt(num2[i]) + carry)
        tong = s % 10 + tong;
        carry = parseInt(s / 10);
    }
    
    tong = carry > 0 ? "1" + tong : tong;
    return tong;
    
};