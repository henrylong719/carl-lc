def connect(self, root: 'Node') -> 'Node':
		cur = root

		while cur:
				# for the next level nodes
				nxt = dummy = Node()
				while cur:
						if cur.left:
								nxt.next = cur.left
								nxt = cur.left
						if cur.right:
								nxt.next = cur.right
								nxt = cur.right
						cur = cur.next
				# move the the next level
				cur = dummy.next
		
		return root