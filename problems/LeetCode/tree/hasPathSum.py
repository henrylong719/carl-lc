def hasPathSum(self, root: Optional[TreeNode], targetSum: int) -> bool:
		if not root:
				return False
		
		targetSum -= root.val

		if not root.left and not root.right:
				return targetSum == 0

		return self.hasPathSum(root.left, targetSum) or self.hasPathSum(root.right, targetSum)