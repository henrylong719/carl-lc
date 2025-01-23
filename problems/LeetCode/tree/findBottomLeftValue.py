def findBottomLeftValue(self, root: Optional[TreeNode]) -> int:

		ans = None
		q = deque([root])

		while q:
				node = q.popleft()
				ans = node.val
				if node.right: q.append(node.right)
				if node.left: q.append(node.left)

		return ans