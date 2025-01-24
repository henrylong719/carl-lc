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