//https://leetcode.com/problems/add-two-numbers
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
     var newHead = new ListNode(0);
     var   p1 = l1, p2 = l2, p3=newHead;
    var carry=0;
        while(p1 !== null || p2 !== null){
            if(p1 !== null){
                carry += p1.val;
                p1 = p1.next;
            }
 
            if(p2 !== null){
                carry += p2.val;
                p2 = p2.next;
            }
 
            p3.next = new ListNode(carry%10);
            p3 = p3.next;
            carry =Math.floor(carry/10);
        }
 
        if(carry==1) 
            p3.next=new ListNode(1);
 
        return newHead.next;
};