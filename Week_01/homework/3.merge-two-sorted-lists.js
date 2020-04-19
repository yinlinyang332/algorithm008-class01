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
var merge = function (nums1, m, nums2, n) {
	let length = m + n
	while (n > 0) {
		if (m <= 0) {
			nums1[--length] = nums2[--n]
			continue
		}
		nums1[--length] = nums1[m - 1] >= nums2[n - 1] ? nums1[--m] : nums2[--n]
	}
}
