//https://leetcode.com/problems/two-sum-iv-input-is-a-bst/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    let stack = [root]
    let map = {}
    
    while (stack.length > 0) {
        let cur = stack.pop()
        
        if (map[k - cur.val] === true) return true
        map[cur.val] = true;
        
        if (cur.left) stack.push(cur.left)
        if (cur.right) stack.push(cur.right)
    }
    return false
};