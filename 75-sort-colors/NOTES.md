**Sort Colors**
​
Because there are only 3 potential values in input, we can set pointers to serve as a rightmost bound of 0s (left), and a leftmost bound of 2s (right). Set curr and left to 1st element of input, and right to last element. While our curr and right pointers don't overlap, we continue looping. If curr points to a 0, we swap with left (even if pointing to same element) to keep our bound, and increment curr and left together. If curr points to 2, we swap with element at right pointer, and decrement right. Otherwise, curr is pointing to 1, so we increment curr alone to check remaining elements. Since sorted in-place, we return input.
​
​
Time: O(n), where n is the length of our input
Space: O(1), no additional space needed since we modify in-place