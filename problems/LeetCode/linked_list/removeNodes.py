def reverseList(self, head: ListNode) -> ListNode:

		cur = head
		prev = None

		while cur:
				nxt = cur.next
				cur.next = prev
				prev = cur
				cur = nxt

		return prev


def removeNodes1(self, head: Optional[ListNode]) -> Optional[ListNode]:

		revList = self.reverseList(head)
		cur = revList
		
		while cur.next:

				if cur.next.val < cur.val:
						cur.next = cur.next.next
				else:
						cur = cur.next
		
		# reverse back
		li = self.reverseList(revList)
		
		return li


# The essence of recursion is that it traverses the linked list in reverse.

def removeNodes(self, head: Optional[ListNode]) -> Optional[ListNode]:
		if head.next == None:
				return head
		
		node = self.removeNodes(head.next)

		if node.val > head.val:
				return node  # remove head
		
		head.next = node
		return head