//https://leetcode.com/problems/find-mode-in-binary-search-tree
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
var findMode = function(root) {
    function traversal(root, map = {}) {
        if (root) {
            map[root.val] = 1 + (map[root.val] || 0);
            traversal(root.left, map)
            traversal(root.right, map)
        }
        return map;
    }
    let entries = Object.entries(traversal(root));
    let maxValue = _.max(entries, pair => pair[1])[1];
    return entries.filter(pair => pair[1] === maxValue).map(pair => pair[0])
};