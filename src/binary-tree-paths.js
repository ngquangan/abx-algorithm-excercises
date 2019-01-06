//https://leetcode.com/problems/binary-tree-paths
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */

function construct_path(prev, c) {
    let r = []
    while(c != null) {
        r.push(c.val);
        c = prev.get(c);
    }
    return r
}

var binaryTreePaths = function(root) {
    if (!root) return []
    
    let result = []
    let stack = [root]
    let prev = new Map()
    prev.set(root, null);
    
    while(stack.length > 0) {
        let cur = stack.pop();
        
        if (!cur.left && !cur.right) {
            result.push(construct_path(prev, cur));
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
    return result.map(p => p.reverse().join('->'))
}