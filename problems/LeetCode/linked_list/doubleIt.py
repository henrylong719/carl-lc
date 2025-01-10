def reverseList(self, head: ListNode) -> ListNode:
		prev = None
		cur = head

		while cur:
				next = cur.next
				cur.next = prev
				prev = cur
				cur = next
		
		return prev

def doublingList(self, revList: ListNode) -> ListNode:
		carry = 0
		dummyNode = ListNode()
		cur = dummyNode

		while revList or carry:
				
				product = 0

				if revList:
						product += revList.val * 2
						revList = revList.next
				
				if carry:
						product += carry

				carry = product // 10
				product %= 10

				cur.next = ListNode(val = product)
				cur = cur.next

		return dummyNode.next

def doubleIt(self, head: Optional[ListNode]) -> Optional[ListNode]:

		revList = self.reverseList(head)

		doubledList = self.doublingList(revList)
		
		ans = self.reverseList(doubledList)

		return ans










