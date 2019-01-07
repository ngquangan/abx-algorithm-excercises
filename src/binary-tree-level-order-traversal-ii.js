//https://leetcode.com/problems/binary-tree-level-order-traversal-ii
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    if(!root) return [];
    let arr = [];
    search(root, 0);
    function search(root, level) {
        if(!root) return;
        if(arr.length <= level) arr.push([]);
        let arrLevel = arr[level];
        arrLevel.push(root.val);
        search(root.left, level + 1);
        search(root.right, level + 1);
    }
    return arr.reverse();
};