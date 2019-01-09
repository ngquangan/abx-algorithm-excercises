//https://leetcode.com/problems/pascals-triangle-ii
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    
    let arr = [[1],[1,1]];
    for(let i = 2; i < rowIndex + 1; i++) {
        arr[i] = [1,1];
        for(let j = 0 ; j < arr[i-1].length - 1; j++) {
            arr[i].splice(j+1, 0,arr[i-1][j] + arr[i-1][j+1]);
        }
    }
    return arr[rowIndex];
};