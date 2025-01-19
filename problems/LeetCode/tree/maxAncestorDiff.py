def maxAncestorDiff(self, root: Optional[TreeNode]) -> int:

		ans = 0

		def dfs(node: Optional[TreeNode], mn: int, mx: int) -> None:
				if not node:
						return
				
				mn = min(mn, node.val)
				mx = max(mx, node.val)

				nonlocal ans
				ans = max(ans, node.val - mn, mx - node.val)

				dfs(node.left, mn, mx)
				dfs(node.right, mn, mx)
		
		dfs(root, inf, -inf)
		return ans


def maxAncestorDiff2(self, root: Optional[TreeNode]) -> int:

		ans = 0

		def dfs(node: Optional[TreeNode], mn: int, mx: int) -> None:
				if not node:
						nonlocal ans
						ans = max(ans, mx - mn)
						return
				
				mn = min(mn, node.val)
				mx = max(mx, node.val)

				dfs(node.left, mn, mx)
				dfs(node.right, mn, mx)

		dfs(root, root.val, root.val)

		return ans