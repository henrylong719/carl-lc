def isBalanced(self, root: Optional[TreeNode]) -> bool:

		def getHeight(node: Optional[TreeNode] ) -> int:
				if not node:
						return 0

				left_height = getHeight(node.left)

				if left_height == -1:
						return -1
				
				right_height = getHeight(node.right)

				if right_height == -1 or abs(left_height - right_height) > 1:
						return -1
				
				return max(left_height, right_height) + 1
		
		return getHeight(root) != -1


def isBalanced(self, root: Optional[TreeNode]) -> bool:

		def dfs(node: Optional[TreeNode]):
				if not node:
						return [True, 0]

				left, right = dfs(node.left), dfs(node.right)

				balanced = left[0] and right[0] and abs(left[1] - right[1]) <= 1

				return [balanced, max(left[1],right[1]) + 1]

		return dfs(root)[0]