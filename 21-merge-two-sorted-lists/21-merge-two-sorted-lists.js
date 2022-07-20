/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if (!list1 && !list2) return list1;
    const merged = new ListNode('x');
    let curr = merged;
    let l1 = list1, l2 = list2;
    
    while (l1 && l2) {
        if (l1.val <= l2.val) {
            curr.next = l1;
            l1 = l1.next;
        } else {
            curr.next = l2;
            l2 = l2.next;
        }
        curr = curr.next;
    }
    
    if (!l1) curr.next = l2;
    if (!l2) curr.next = l1;
    
    return merged.next;
};

/*
We don't necessarily need to create new nodes for every single input list node, by creating a new list with pointer, we can just save a reference to the nodes in sorted order



We create a sentinel node first, so we have a next reference to attach the first node reference to



*/