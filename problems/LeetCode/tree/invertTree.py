def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
		if not root: return None

		
		# temp = root.left
		# root.left = root.right
		# root.right = temp

		root.left, root.right = root.right, root.left

		self.invertTree(root.left)
		self.invertTree(root.right)

		return root