//https://leetcode.com/problems/relative-ranks
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function(nums) {
    let obj = {};
    for(let i = 0 ; i < nums.length; i++) {
        let max = Math.max(...nums);
        let index = nums.indexOf(max);
        
        switch (i) {
            case 0: {
                obj[index] = "Gold Medal";
                break;
            }
            case 1: {
                obj[index] = "Silver Medal";
                break;
            }
            case 2: {
                obj[index] = "Bronze Medal";
                break;
            }
            default:
                obj[index] = i + 1 + "";
        }
        
        nums[index] = -1;
    }
    console.log(obj);
    
    return Object.values(obj);
    
};