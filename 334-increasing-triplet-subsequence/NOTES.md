**Increasing Triplet Subsequence**
​
Constraints:
- Linear time (O(n)) and constant space(O(1))
-  i < j < k
-  input[i] < input[j] < input[k]
​
What do we know with certainty about iterating through input?
- Indices will strictly increase if we iterate conventionally from left to right
​
We can set left and mid variables with default infinity values since we're trying to find values as small as possible. This gives us more "space" to find a k val that complies with requirements. We can iterate through our input once, knowing we'll end at the largest index. At each element, if our element is less than or equal to left, we can update left with that element's value. Else if that element is less than or equal to mid, we update mid. If we reach an element that is neither, we know that element is both greater than left and mid AND a larger index, so we can return true. If we end our iteration without fulfilling that last constraint, we return false.
​