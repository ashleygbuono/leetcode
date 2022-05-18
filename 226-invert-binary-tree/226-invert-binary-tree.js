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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    //recursion//
    // if (!root) return null;
    // [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
    // return root;

    //iterative//
    let queue = root ? [root] : [];
    
    while (queue.length) {
        let node = queue.shift();
        if (node) {
            [node.left, node.right] = [node.right, node.left];
            queue.push(node.left, node.right);
        }
    }
    return root;
};