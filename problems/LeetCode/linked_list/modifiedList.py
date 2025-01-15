def modifiedList(self, nums: List[int], head: Optional[ListNode]) -> Optional[ListNode]:
		dummyNode = ListNode(next = head)
		cur = dummyNode
		nums = set(nums)

		while cur.next:

				if cur.next.val in nums:
						cur.next = cur.next.next
				else:
						cur = cur.next
		
		return dummyNode.next