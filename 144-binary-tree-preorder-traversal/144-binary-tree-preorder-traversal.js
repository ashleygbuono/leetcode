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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    //iterative
    /*
    let stack = root ? [root] : [];
    let res = [];
    
    while (stack.length) {
        let node = stack.pop();
        res.push(node.val);
        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
    }
    */
    //recursive
    let res = [];
    
    const preOrderDFS = (node) => {
        if (!node) return null;
        res.push(node.val);
        
        if (node.left) preOrderDFS(node.left);
        if (node.right) preOrderDFS(node.right);
    }
    
    preOrderDFS(root);
    return res;
};

