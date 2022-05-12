**Merge Two Sorted Lists**
​
Create a dummy node/list and set a pointer. Since our input lists are sorted, we can compare the values at each head node, add the smaller value to our new list and set set the head of the list we pulled from to the next node. We can continue this loop for as long as our input lists both still have nodes left to traverse. If either input still has nodes left, we can attach that list to the end of our new list and return.
​
Time: O(n + m) where n and m are the size of our inputs
Space: O(n + m)