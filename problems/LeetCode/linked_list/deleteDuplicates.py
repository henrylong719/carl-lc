def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
		if not head: return None

		cur = head

		while cur.next:
				if cur.next.val == cur.val:
						cur.next = cur.next.next
				else:
						cur = cur.next
		
		return head