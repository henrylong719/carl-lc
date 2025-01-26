def reverseOddLevels(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
		
		depth = 0
		q = deque([root])

		while q:
				# swap in odd level
				if depth & 1:
						left, right = 0, len(q) - 1
						while left < right:
								q[left].val, q[right].val = q[right].val, q[left].val
								left += 1
								right -= 1

				# pop out all nodes in the current level, and add next level nodes
				for _ in range(len(q)):
						node = q.popleft()
						if node.left: q.append(node.left)
						if node.right: q.append(node.right)
				
				depth += 1
				
		return root


def reverseOddLevels(self, root: Optional[TreeNode]) -> Optional[TreeNode]:

		def bfs(node1: Optional[TreeNode], node2: Optional[TreeNode], isOdd: bool) -> None:
				if not node1: return

				if isOdd: node1.val, node2.val = node2.val, node1.val

				bfs(node1.left, node2.right, not isOdd)
				bfs(node1.right, node2.left, not isOdd)

		bfs(root.left, root.right, True)

		return root