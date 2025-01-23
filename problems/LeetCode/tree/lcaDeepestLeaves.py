def lcaDeepestLeaves(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
		ans = None
		max_depth = -1

		def dfs(node: Optional[TreeNode], depth: int) -> int:
				if not node:
						return -1

				nonlocal ans, max_depth
				if not node.left and not node.right:
						if depth > max_depth:
								max_depth = depth
								ans = node                
						return depth
						
				l = dfs(node.left, depth + 1)
				r = dfs(node.right, depth + 1)

				if l == r == max_depth:
						ans = node
				
				return max(l, r)

		dfs(root, 0)
		return ans