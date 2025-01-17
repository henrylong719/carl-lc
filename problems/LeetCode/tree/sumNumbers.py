def sumNumbers1(self, root: Optional[TreeNode]) -> int:

		ans = 0

		def dfs(node: Optional[TreeNode], currentSum: str) -> None:
				if not node:
						return
				
				currentSum += str(node.val)

				if not node.left and not node.right:
						nonlocal ans
						ans += int(currentSum)
						return
				
				dfs(node.left, currentSum)
				dfs(node.right, currentSum)
		
		dfs(root, '')

		return ans


def sumNumbers(self, root: Optional[TreeNode]) -> int:

		ans = 0

		def dfs(node: Optional[TreeNode], currentSum: int) -> None:
				if not node:
						return
				
				currentSum = currentSum * 10 + node.val

				if not node.left and not node.right:
						nonlocal ans
						ans += currentSum
						return
				
				dfs(node.left, currentSum)
				dfs(node.right, currentSum)
		
		dfs(root, 0)

		return ans