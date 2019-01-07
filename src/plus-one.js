/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let carry = 0;
    if(checkNum(digits)) {
        let arr = [1];
        for(let i = 0 ; i < digits.length ; i++) {
            arr.push(0); 
        }
        return arr;
            
    } else {
            for(let i = digits.length - 1 ; i >= 0 ; i--) {
            if(carry === 0) {
                if(digits[i] < 9) {
                    digits[i] = digits[i] + 1;
                    break;
                } else {
                    digits[i] = 0;
                    carray = 1;
                }
            } else {
                if(digits[i] < 9) {
                    digits[i] = digits[i] + carry;
                    break;
                } else {
                    digits[i] = 0;
                    carray = 1;
                }
            }
        }
    }

    return digits;
};

let checkNum = (digits) => {
    let check = true;
    
    for(let i = 0 ; i < digits.length ; i++) {
        if(digits[i] !== 9) {
            check = false;
        }
    }
    
    return check;
    
}