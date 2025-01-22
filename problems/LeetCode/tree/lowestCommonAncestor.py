def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
		if not root:
				return None
		
		if root is p or root is q:
				return root
		
		l = self.lowestCommonAncestor(root.left, p, q)
		r = self.lowestCommonAncestor(root.right, p, q)

		if l and r:
				return root
		
		return l or r