def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:

		sortedNodes = []

		def dfs(node: Optional[TreeNode]) -> None:
				if not node:
						return

				dfs(node.left)
				sortedNodes.append(node.val)
				dfs(node.right)
				
		dfs(root)

		return sortedNodes[k-1]


def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:

		def dfs(node: Optional[TreeNode]) -> int:

				nonlocal k
				if node == None:
						return None
				
				left_result = dfs(node.left)

				if left_result != None:
						return left_result

				k -= 1

				if k == 0:
						return node.val
				
				return dfs(node.right)
		
		return dfs(root)