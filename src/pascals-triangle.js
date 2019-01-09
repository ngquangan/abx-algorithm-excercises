//https://leetcode.com/problems/pascals-triangle
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if(numRows ===0) return [];
    if(numRows === 1) return [[1]];
    if(numRows === 2) return [[1],[1,1]];
    
    let arr = [[1],[1,1]];
    for(let i = 2; i < numRows; i++) {
        arr[i] = [1,1];
        for(let j = 0 ; j < arr[i-1].length - 1; j++) {
            arr[i].splice(j+1, 0,arr[i-1][j] + arr[i-1][j+1]);
        }
    }
    return arr;
};