/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    let queue = root ? [root] : [];
    let sums = new Set();
    
    while (queue.length) {
        let node = queue.shift();
        let diff = k - node.val;
        if (sums.has(diff)) return true;
        sums.add(node.val);
        
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
    return false;
};
