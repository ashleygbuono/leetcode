**Binary Tree Preorder Traversal**
​
DFS =>pre-order traversal (root, left, right)
​
Two approaches: 1) recursive or 2) using a stack (iterative)
​
*1st approach*
Init a result array and recursive function that gets passed a node.
​
Inside recursive fn: If node's value is null, return null. Otherwise, we push node's value to our res. If left and/or right children exist, we recursive call on node's left and/or right.
​
Outside recursive fn: Pass in our root to our recursive fn and return our result.
​
*2nd approach*
Init a result array and a stack with our root's value as default. While our stack is not empty, we pop our current node from the stack and add its value to our result. Because a stack is LIFO, we first check for right children and add to stack before checking/adding left children. Loop continues until all nodes traversed and added to result. Finally, return result.
​