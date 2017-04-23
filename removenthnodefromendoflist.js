//https://leetcode.com/problems/remove-nth-node-from-end-of-list
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var elem = head,
    savedElem=head,
    i=0;
    while(elem){
        if(i>n&&elem)
        {
            savedElem=savedElem.next;
        }
        elem=elem.next;
        i++;
        
    }
    if(i<n){
        return [];
    }
    if(i==n){
        return head.next;
    }
    if(savedElem){
        savedElem.next=savedElem.next.next;
    }
    return head;
    
};