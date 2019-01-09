//https://leetcode.com/problems/sum-of-left-leaves
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    if(!root) return 0;
    let currentNode = root;
    let queue = [root];
    let sum = 0;
    while(queue.length > 0) {
        let node = queue.shift();
        if(node.left) {
            if(node.left.left === null && node.left.right === null) sum += node.left.val;
            queue.push(node.left);
        }
        if(node.right) {
            queue.push(node.right);
        }
    }
    return sum;
};