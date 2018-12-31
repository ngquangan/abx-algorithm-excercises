//https://leetcode.com/problems/valid-parentheses
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let arr = [];
    for(let i = 0 ; i < s.length ; i++) {
        if(s[i] === "(" || s[i] === "[" || s[i] === "{") {
            arr.push(s[i]);
            continue;
        }
        
        if(arr.length === 0) return false;
        
        switch (s[i]) {
            case ")": {
                let ch = arr.pop();
                if(ch === "[" || ch === "{") return false;
                break;
            }
            case "]": {
                let ch = arr.pop();
                if(ch === "(" || ch === "{") return false;
                break;
            }
            case "}": {
                let ch = arr.pop();
                if(ch=== "(" || ch === "[") return false;
                break;
            }
        }

    }
    return arr.length === 0 ? true : false;
    
};