def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:

		pre = None
		cur = head

		while cur:
				next = cur.next
				cur.next = pre
				pre = cur
				cur = next

		return pre