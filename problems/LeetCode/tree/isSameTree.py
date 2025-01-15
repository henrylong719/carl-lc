def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
		if p == None and q == None:
				return True
		
		if p == None or q == None or p.val != q.val:
				return False

		return self.isSameTree(p.left, q.left) and self.isSameTree(p.right, q.right)