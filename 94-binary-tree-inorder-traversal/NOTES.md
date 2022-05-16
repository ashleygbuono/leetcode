**Binary Tree Inorder Traversal**
Per LC: Recursive solution is trivial, could you do it iteratively?
​
DFS => in-order (left, root, right)
​
We can use a stack to store nodes in the order we need them as we traverse. Init a stack, our result array and can set a curr pointer to root. Any time our curr value is null, we know that we can't traverse further down the tree at that point, so we have to pop from our stack. We will loop for as long as curr is not null or our stack is not empty. While curr is not null, we push the node to our stack and move to the left child since we need to find leftmost node. Otherwise, pop from stack since curr is null (meaning we've gone as left as possible). We add curr's value to our result, and then move to curr's right child. Once our loop ends, we return our result;
​
​
Time: O(n), where n is the number of nodes in our tree
Space: O(n), we allocate additional storage in order to hold the value of each node in our input