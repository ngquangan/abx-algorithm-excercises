//https://leetcode.com/problems/path-sum
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    if (!root) return []
    
    let stack = [root]
    let prev = new Map()
    prev.set(root, null);
    
    while(stack.length > 0) {
        let cur = stack.pop();
        
        if (!cur.left && !cur.right) {
            if (construct_path(prev, cur) === sum) return true
        }
        
       
        if (cur.left) {
            prev.set(cur.left, cur);
            stack.push(cur.left)
        }
        
         if (cur.right) {
            prev.set(cur.right, cur);
            stack.push(cur.right)
        }
    }
    return false
};


function construct_path(prev, c) {
    let r = 0
    while(c != null) {
        r += c.val
        c = prev.get(c);
    }
    return r
}
