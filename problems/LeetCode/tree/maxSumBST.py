def maxSumBST(self, root: Optional[TreeNode]) -> int:
		ans = 0

		def dfs(node: Optional[TreeNode]) -> tuple:
				if node is None:
						return inf, -inf, 0
				
				left_min, left_max, left_sum = dfs(node.left)
				right_min, right_max, right_sum = dfs(node.right)

				x = node.val

				if x <= left_max or x >= right_min:
						return -inf, inf, 0

				s = left_sum + right_sum + x

				nonlocal ans
				ans = max(s, ans)

				return min(left_min, x), max(right_max, x), s
		
		dfs(root)
		return ans