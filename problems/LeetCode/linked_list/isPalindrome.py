

def middleNode (self, head: ListNode) -> ListNode:
		fast = slow = head

		while fast and fast.next:
				fast = fast.next.next
				slow = slow.next

		return slow

def reverseList (self, head: ListNode) -> ListNode:
		prev, cur = None, head

		while cur:
				next = cur.next
				cur.next = prev
				prev = cur
				cur = next

		return prev

def isPalindrome(self, head: Optional[ListNode]) -> bool:
		mid = self.middleNode(head)
		head2 = self.reverseList(mid)

		while head2:
				if head.val != head2.val:
						return False
				head = head.next
				head2 = head2.next
		
		return True
		