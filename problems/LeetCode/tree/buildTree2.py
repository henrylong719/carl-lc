def buildTree(self, inorder: List[int], postorder: List[int]) -> Optional[TreeNode]:
		if not inorder or not postorder:
				return None

		index = {x: i for i, x in enumerate(inorder)}
				
		n = len(postorder)
		
		root = TreeNode(postorder[n - 1])
		mid = index[postorder[n - 1]]
		
		root.left = self.buildTree(inorder[:mid], postorder[:mid])
		root.right = self.buildTree(inorder[mid+1:], postorder[mid:n-1])

		return root