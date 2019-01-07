//https://leetcode.com/problems/distribute-candies
/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
    candies.sort((a,b) => a - b);
    let count = 0;
    for(let i = 0 ; i < candies.length; i++) {
        if(candies[i] !== candies[i+1]) {
            count++;
        }
        if(count === candies.length/2) {
            break;
        }
    }
    return count;
};