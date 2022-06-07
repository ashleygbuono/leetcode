/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if (!head) return null;
    let sentinel = new ListNode("X");
    sentinel.next = head;
    let curr = sentinel;
    
    while (curr.next && curr.next.next) {
        if (curr.next.val === curr.next.next.val) {
            let stored = curr.next.val;
            while (curr.next && curr.next.val === stored) {
                curr.next = curr.next.next;
            }
        } else {
            curr = curr.next;
        }
    }
    return sentinel.next;
};