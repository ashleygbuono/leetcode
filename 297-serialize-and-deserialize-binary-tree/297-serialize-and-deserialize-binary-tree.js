/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    let data = [];

    function SDBT(node) {
        if (node == null) {
          data.push(null);
          return;
        }

        data.push(node.val);
        SDBT(node.left);
        SDBT(node.right);
      }

    SDBT(root);
    return data;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    function SDBT() {
    if (data.length === 0) return;

    const val = data.shift();
    if (val == null) return null;

    const node = new TreeNode(val);
    node.left = SDBT();
    node.right = SDBT();
    return node;
    }

    return SDBT();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

