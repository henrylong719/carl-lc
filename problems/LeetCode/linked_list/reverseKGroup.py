def reverseKGroup(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
		n = 0
		cur = head

		while cur:
				n = n + 1
				cur = cur.next

		dummyNode = ListNode(next = head)
		leftPrev = dummyNode
		prev = ListNode()
		cur = dummyNode.next

		while n >= k:
				
				n = n - k

				# reverse nodes
				for _ in range(0, k):
						temp = cur.next
						cur.next = prev
						prev = cur
						cur = temp
				
				nxt = leftPrev.next
				leftPrev.next.next = cur
				leftPrev.next = prev
				leftPrev = nxt
		
		return dummyNode.next