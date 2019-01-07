//https://leetcode.com/problems/find-pivot-index
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    
    let sum = sumArr(nums);
    let sumL = 0;
    let sumR = sum;
    let i = 0 ;
    
    return nums.findIndex((num, i) => {
        sumL += nums[i-1] || 0;
        sumR -= num;
        return sumL === sumR;
    });
};

let sumArr = (nums) => {
    return nums.reduce((prev, current) => {
       return prev + current; 
    },0);
}
