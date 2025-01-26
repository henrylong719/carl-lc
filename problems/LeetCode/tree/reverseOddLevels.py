def reverseOddLevels(self, root: Optional[TreeNode]) -> Optional[TreeNode]:

		q = deque([root])
		depth = 0

		while q:
				# swap
				if depth & 1:
						left, right = 0, len(q) - 1 
						while left < right:
								q[left].val, q[right].val = q[right].val, q[left].val
								left += 1
								right -= 1

				for _ in range(len(q)):
						node = q.popleft()
						if node.left: q.append(node.left)
						if node.right: q.append(node.right)
				depth += 1 
		
		return root