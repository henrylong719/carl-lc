def isSymmetric(self, root: Optional[TreeNode]) -> bool:

		def isSymmeTrees(left: Optional[TreeNode], right: Optional[TreeNode]) -> bool:

				if not left and not right:
						return True
				
				if (not left or not right) or (left.val != right.val):
						return False
				
				return isSymmeTrees(left.left, right.right) and isSymmeTrees(left.right, right.left)

		
		return isSymmeTrees(root.left, root.right)