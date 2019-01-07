//https://leetcode.com/problems/toeplitz-matrix
/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    let obj = {};
    for(let i = 0 ; i < matrix.length; i++) {
        for(let j = 0 ; j < matrix[i].length; j++) {
            if(obj[j - i]) {
                obj[j-i].push(matrix[i][j]);
            } else {
                obj[j-i] = [matrix[i][j]];
            }
        }
    }
    
    console.log(obj);
    
    let values = Object.values(obj);
    
    for(let i = 0 ; i < values.length; i++) {
        for(let j = 0; j < values[i].length; j++) {
            if(j < values[i].length - 1) {
                if(values[i][j] !== values[i][j+1]) return false;
            }

        }
    }
    return true;
};