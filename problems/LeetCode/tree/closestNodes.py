def closestNodes(self, root: Optional[TreeNode], queries: List[int]) -> List[List[int]]:

		sorted_vals = []
		def dfs(node: Optional[TreeNode]) -> None:
				if not node:
						return

				dfs(node.left)
				sorted_vals.append(node.val)
				dfs(node.right)

		dfs(root)
		n = len(sorted_vals)
		ans =[]

		for value in queries:
				right_idx = bisect_left(sorted_vals, value)
				right_val = sorted_vals[right_idx] if 0 <= right_idx < n else -1

				left_idx = right_idx

				if left_idx == n or sorted_vals[left_idx] != value:
						left_idx -= 1
				
				left_val = sorted_vals[left_idx] if 0 <= left_idx < n else -1

				ans.append([left_val, right_val])
		
		return ans