
def reverseList(self, head: ListNode) -> ListNode:

		prev = None
		cur = head

		while cur:
				next = cur.next
				cur.next = prev
				prev = cur
				cur = next
		
		return prev

def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:

		revL1 = self.reverseList(l1)
		revL2 = self.reverseList(l2)

		carry = 0
		dummyNode = ListNode()
		cur = dummyNode

		while revL1 or revL2 or carry:

				s = 0

				if revL1:
						s += revL1.val
						revL1 = revL1.next
				
				if revL2:
						s += revL2.val
						revL2 = revL2.next
				
				s += carry

				carry = s // 10
				s %= 10
						
				cur.next = ListNode(val = s)
				cur = cur.next

		ans = self.reverseList(dummyNode.next)

		return ans