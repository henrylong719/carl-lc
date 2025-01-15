def removeNthFromEnd1(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
		if not head: return None

		length = 0
		cur = head
		# Get the length of the List
		while cur:
				length += 1
				cur = cur.next


		dummyNode = ListNode()
		dummyNode.next = head
		cur = dummyNode

		for i in range(0, length - n):
				cur = cur.next

		cur.next = cur.next.next


		return dummyNode.next


def removeNthFromEnd2(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
		left = right = dummyNode = ListNode(next = head)

		for _ in range(n):
				right = right.next
		
		while right.next:
				left = left.next
				right = right.next

		left.next = left.next.next
		return dummyNode.next