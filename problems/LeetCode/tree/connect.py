def connect(self, root: 'Optional[Node]') -> 'Optional[Node]':
		if not root: return None

		q = deque([root])

		while q:
				l = len(q)
				for i in range(l):
						node = q.popleft()

						node.next = q[0] if i < l - 1 else None

						if node.left: q.append(node.left)
						if node.right: q.append(node.right)
						
		return root



def connect2(self, root: 'Optional[Node]') -> 'Optional[Node]':
		node = root

		while node:
				# next line nodes
				nxt = dummy = Node()
				while node:
						if node.left:
								nxt.next = node.left
								nxt = node.left
						if node.right:
								nxt.next = node.right
								nxt = node.right
						node = node.next
				# move to next line
				node = dummy.next
		
		return root