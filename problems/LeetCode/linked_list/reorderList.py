
def middleNode(self, head: ListNode) -> ListNode:
		fast = head
		slow = head

		while fast and fast.next:
				fast = fast.next.next
				slow = slow.next

		return slow

def reverseList(self, head: ListNode) -> ListNode:
		prev = None
		cur = head

		while cur:
				next = cur.next
				cur.next = prev
				prev = cur
				cur = next

		return prev
				
def reorderList(self, head: Optional[ListNode]) -> None:
		"""
		Do not return anything, modify head in-place instead.
		"""

		mid = self.middleNode(head)
		head2 = self.reverseList(mid)

		while head2.next:
				next = head.next
				next2 = head2.next

				head.next = head2
				head2.next = next

				head = next
				head2 = next2

        