def buildTree(self, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:
	
	index = {x: i for i, x in enumerate(inorder)}
	if not preorder or not inorder:
			return None

	root = TreeNode(preorder[0])
	mid = index[preorder[0]]

	root.left = self.buildTree(preorder[1:mid+1], inorder[:mid])
	root.right = self.buildTree(preorder[mid+1:],inorder[mid+1:])

	return root