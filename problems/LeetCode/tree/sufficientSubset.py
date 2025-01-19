def sufficientSubset(self, root: Optional[TreeNode], limit: int) -> Optional[TreeNode]:

		def dfs(node: Optional[TreeNode], current_sum: int) -> None:
				if not node:
						return None

				current_sum += node.val

				# leaf, check if it's sufficient
				if not node.left and not node.right:
						return None if current_sum < limit else node
				
				node.left = dfs(node.left, current_sum)
				node.right = dfs(node.right, current_sum)

				# if the node has no children after pruned, then it's effectively pruned
				if not node.left and not node.right:
						return None
				
				return node

		return dfs(root, 0)