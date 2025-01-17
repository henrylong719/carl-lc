def maxDepth(self, root: Optional[TreeNode]) -> int:
		if not root: return 0

		ans = 1
		queue = deque([(ans, root)])

		while queue:
				depth, node = queue.popleft()
				if node:
						ans = max(ans, depth)
						queue.append([depth + 1, node.left])
						queue.append([depth + 1, node.right])
		
		return ans


def maxDepth2(self, root: Optional[TreeNode]) -> int:

		if not root:
				return 0

		l_depth = self.maxDepth(root.left)
		r_depth = self.maxDepth(root.right)

		return 1 + max(l_depth, r_depth)