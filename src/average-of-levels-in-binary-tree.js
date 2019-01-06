//https://leetcode.com/problems/average-of-levels-in-binary-tree
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    if(root === null) return [];
    let arr = [];
    search(root, 1);
    function search(root, level) {
        if(root) {
            if(arr.length < level) {
                arr.push([]);
            }
            
            let arrLevel = arr[level - 1];
            
            arrLevel.push(root.val);
            
            search(root.left,level + 1);
            search(root.right, level + 1);
            
        } else {
            return;
        }
    }
    return arr.map(a => {
        return a.reduce((prev, current) => {
           return prev + current; 
        }, 0) / a.length;
    });
};