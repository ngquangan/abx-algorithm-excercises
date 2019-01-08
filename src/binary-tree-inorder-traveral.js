//https://leetcode.com/problems/binary-tree-inorder-traversal
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
var inorderTraversal = function(root) {
    let rs = [];
    getValue(root, rs);
    return rs;
};

let getValue = (root, rs) => {
    if(root) {
        if(root.left !== null) {
            getValue(root.left, rs);
        }
        rs.push(root.val);
        if(root.right !== null) {
            getValue(root.right, rs);
        }
    }
}