def maxDepth(self, root: Optional[TreeNode]) -> int:
		if not root: return 0

		ans = 1
		queue = [[ans, root]]

		while len(queue):
				depth, node = queue.pop(0)
				if node:
						ans = max(ans, depth)
						queue.append([depth + 1, node.left])
						queue.append([depth + 1, node.right])

		return ans