/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
   if (!head || !head.next) return null;
    
    let slow = head, fast = head;
    
    slow = slow.next;
    fast = fast.next.next; 
    
    while (slow !== fast) {
        if (!slow.next || !fast.next || !fast.next.next) return null;
        slow = slow.next;
        fast = fast.next.next;
    }
  
    fast = head;
    
    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }
    
    return fast;
};