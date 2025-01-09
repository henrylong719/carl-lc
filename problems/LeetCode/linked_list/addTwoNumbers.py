def reverseList(self, head: ListNode) -> ListNode:

		prev = None
		cur = head

		while cur:
				next = cur.next
				cur.next = prev
				prev = cur
				cur = next
		
		return prev

def addTwoList(self, revL1: ListNode, revL2: ListNode) -> ListNode:
		carry = 0
		dummyNode = ListNode()
		cur = dummyNode

		while revL1 or revL2 or carry:

				res = 0

				if revL1:
						res = res + revL1.val
						revL1 = revL1.next
				
				if revL2:
						res = res + revL2.val
						revL2 = revL2.next
				
				res += carry

				carry = res // 10
				res = res % 10

				cur.next = ListNode(res)
				cur = cur.next

		return dummyNode.next

def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
		revL1 = self.reverseList(l1)
		revL2 = self.reverseList(l2)

		revL3 = self.addTwoList(revL1, revL2)
		ans = self.reverseList(revL3)

		return ans