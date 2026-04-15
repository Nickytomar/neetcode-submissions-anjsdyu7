/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
      mergeTwoLists(list1, list2) {
        let dummyNode = new ListNode(-1);
        let merged=dummyNode;
        while(list1 != null && list2 != null){
            if(list1.val <= list2.val){
                merged.next = list1;
                list1 = list1.next
            }else{
                merged.next = list2;
                list2=list2.next;
            }
            merged = merged.next;
        }
        if(list1 != null){
            merged.next = list1
        }
         if(list2 != null){
            merged.next = list2
        }
        return dummyNode.next;
    }
}
