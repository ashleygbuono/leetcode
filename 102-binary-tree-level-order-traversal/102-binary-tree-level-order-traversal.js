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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let queue = root ? [root] : [];
    let res = [];
    
    while (queue.length) {
        let size = queue.length;
        let lvlQueue = [];
        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            lvlQueue.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        res.push(lvlQueue);
    }
    return res;
};