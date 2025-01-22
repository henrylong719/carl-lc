def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
		#if not root:
			#  return None
		
		val = root.val
		if p.val < val and q.val < val:
				return self.lowestCommonAncestor(root.left, p, q)
		
		if p.val > val and q.val > val:
				return self.lowestCommonAncestor(root.right, p, q)

		return root