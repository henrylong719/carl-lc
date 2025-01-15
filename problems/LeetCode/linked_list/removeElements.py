def removeElements(self, head: Optional[ListNode], val: int) -> Optional[ListNode]:

		dummyNode = ListNode(next = head)
		cur = dummyNode

		while cur.next:

				if cur.next.val == val:
						cur.next = cur.next.next
				else:
						cur = cur.next
		
		return dummyNode.next