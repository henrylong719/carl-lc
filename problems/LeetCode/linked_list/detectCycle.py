def detectCycle(self, head: Optional[ListNode]) -> Optional[ListNode]:
	'''
	The function detects and returns the starting node of a cycle in a linked list if one exists.
	
	:param head: The `head` parameter in the `detectCycle` function represents the starting node of a
	linked list. The function is designed to detect if there is a cycle within the linked list starting
	from the provided head node. If there is a cycle, the function will return the node where the cycle
	begins;
	:type head: Optional[ListNode]
	:return: The function `detectCycle` returns the node where the cycle begins in a given linked list
	if a cycle is detected, otherwise it returns `None`.
	
 	'''
	if not head: return None

	fast = head
	slow = head

	while fast and fast.next:
			fast = fast.next.next
			slow = slow.next

			if fast == slow:
					fast = head
					while fast != slow:
							fast = fast.next
							slow = slow.next
					
					return fast
	
	return None
