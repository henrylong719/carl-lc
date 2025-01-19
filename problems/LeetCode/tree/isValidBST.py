def isValidBST(self, root: Optional[TreeNode]) -> bool:
		
		def dfs(node:Optional[TreeNode], mn: int, mx: int) -> bool:
				if not node:
						return True
				
				if node.val <= mn or node.val >= mx:
						return False

				return dfs(node.left,mn, node.val) and dfs(node.right, node.val, mx)

		
		return dfs(root, -inf, inf)