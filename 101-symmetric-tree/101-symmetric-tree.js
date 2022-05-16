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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (!root) return true;
    
    const symmetryHelper = (tree1, tree2) => {
        if (!tree1 || !tree2) return tree1 === tree2;
        
        if (tree1.val !== tree2.val) return false;
        
        return symmetryHelper(tree1.left, tree2.right) && symmetryHelper(tree1.right, tree2.left);
    }
    return symmetryHelper(root.left, root.right);
};