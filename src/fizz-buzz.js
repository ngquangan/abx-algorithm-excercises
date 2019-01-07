//https://leetcode.com/problems/fizz-buzz
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let arr = [];
    
    for(let i = 1; i<= n ; i++) {
        arr.push(i + "");
    }
    
    for(let i = 0; i < arr.length ; i++) {
        
        if(arr[i] % 15 === 0) {
            arr[i] = "FizzBuzz";
            continue;
        }
        
        if(arr[i] % 3 === 0) {
            arr[i] = "Fizz";
            continue;
        }
        if(arr[i] % 5 === 0) {
            arr[i] = "Buzz";
            continue;
        }
        
    }
    
    return arr;
};