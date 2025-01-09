def reverseBetween(head: Optional[ListNode], left: int, right: int) -> Optional[ListNode]:
		dummyNode = ListNode()
		dummyNode.next = head
		leftPrev = dummyNode
		cur = head

		# move leftPrev pointer to the one left position of the left
		for i in range (0, left - 1):
				leftPrev = cur
				cur = cur.next

		
		prev = ListNode()
		# reverse nodes between left and right
		for i in range(0, right - left + 1):
				temp = cur.next
				cur.next = prev
				prev = cur
				cur = temp
		
		leftPrev.next.next = cur
		leftPrev.next = prev

		return dummyNode.next