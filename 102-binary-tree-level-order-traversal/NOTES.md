**Binary Tree Level Order Traversal**
​
BFS traversal, but each nodes at each level should be kept in their own distinct arrays within our result. While normally we use a queue for BFS, we also need a way to store nodes at each level as we traverse.
​
We init our result array and a queue with our root node passed in. Since our queue stores nodes at each level as we traverse, we will continue to loop as long as our queue is not empty. Inside our loop, we init another array that will hold current level nodes separate from other levels. At each level, we want to loop again to process our nodes, using our queue size to distinguish the number of passes. We can shift the first node off our queue and push its value to our level array, and then add left and right children (if any) to our queue. Once outside our inner loop, we push our level storage array into our result. At each new level, our level array gets reset to an empty array before continuing our node processing. Finally, return result.
​
Time: O(n), where n is the number of nodes in our input tree (despite two loops, we don't touch each node more than once)
Space: O(n), we create our result array as additional storage that will hold each node's value