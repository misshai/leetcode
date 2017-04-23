//https://leetcode.com/problems/swap-nodes-in-pairs
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
var swapPairs = function(head) {
    if(head === null || head.next === null)  { 
        return head;
    }
    var h = new ListNode(0);
    h.next = head;
    p = h;
    while(h.next && h.next.next){
       var t1 = h;
        h = h.next;
        t1.next = h.next;
 
        
        var t2 = h.next.next;
        h.next.next = h;
        h.next = t2;
    }
    return p.next;
    
};