def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
		if not head: return None

		dummyNode = ListNode(next = head)

		cur = dummyNode

		while cur.next and cur.next.next:
				val = cur.next.val

				# find repetitive
				if val == cur.next.next.val:
						# moving cur.next pointer until a distinctive element
						while cur.next and cur.next.val == val:
								cur.next = cur.next.next
				else:
						cur = cur.next

		return dummyNode.next  