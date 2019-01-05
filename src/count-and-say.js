//https://leetcode.com/problems/count-and-say
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let s = "1";
    let temp = 0;
    let stemp = s;
    let check = true;
    for(let j = 2; j <= n; j++) {
        temp = 0;
        stemp = s;
        check = true;
        for(let i = 0; i < stemp.length; i++) {
            if(stemp[i] !== stemp[i+1]) {
                let strSub = stemp.slice(temp, i + 1);
                if(check) {
                    s = strSub.length + stemp[temp] + "";
                    check = false;
                } else {
                    s += strSub.length + stemp[temp] + "";
                }
                temp = i + 1 ;
            }
        }
        
    }
    
    return s;
};