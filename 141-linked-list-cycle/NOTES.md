**Linked List Cycle**
​
By setting slow and fast pointers, we can traverse through the list at different rates. As long as fast.next is not null, we continue looping. If slow and fast ever point to the same node, we return true. Else, fast will reach the end of the list and we can return false.
​
Time: O(n), where n is the number of nodes in list
Space: O(1)