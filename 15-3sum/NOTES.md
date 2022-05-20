**3Sum**
​
By sorting our input, we can leverage pointers to check input elements as we iterate. Also, we know we want to avoid duplicate triplets, so we can include checks that will continue iterating if we find equivalent adjacent values.
​
We loop over our sorted input, iterating until two before the end (will be taken up by our left and right pointers). If element at current idx equals element at previous idx, iterate to next idx. Init left pointer to start to the immediate right of current idx, and right pointer to the last element of input. While our pointers do not overlap, if input at left and right pointers equals 0 minus input at i, we wrap in an array and push into our result array. We increment left and decrement right; if new left element is the same as previous left, increment left and if new right is same as previous, decrement right.
​
Else if sum of input at left and right is greater than 0 - input at i, we decrement right to a smaller value element. Otherwise, increment left to a greater value element. Finally, return result array.
​
Time: O(n), where n is length of our input
Space: O(n), for additional space in a worst case scenario, our result could hold every element in our input
​