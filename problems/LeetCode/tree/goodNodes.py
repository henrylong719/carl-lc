def goodNodes(self, root: TreeNode) -> int:

		ans = 0

		def dfs(node: TreeNode, pathMax: int) -> None:
				if not node:
						return
				
				if node.val >= pathMax:
						nonlocal ans
						ans += 1
						pathMax = node.val

				dfs(node.left, pathMax)
				dfs(node.right, pathMax)
		
		dfs(root, -inf)
		
		return ans