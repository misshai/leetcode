//https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii
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
var deleteDuplicates = function(head) {
    var pointer = {val:0,next:head};
    var p=pointer;
    while(p.next&&p.next.next){
        if(p.next.val == p.next.next.val){
            var dup = p.next.val;
            while(p.next!=null&&p.next.val==dup){
                p.next = p.next.next;
            }
        }else{
            p=p.next;
        }
    }
    return pointer.next
};