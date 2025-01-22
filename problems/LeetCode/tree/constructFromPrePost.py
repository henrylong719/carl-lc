def constructFromPrePost(self, preorder: List[int], postorder: List[int]) -> Optional[TreeNode]:

		if not preorder or not postorder:
				return None

		index = {x: i for i, x in enumerate(postorder)}

		root = TreeNode(preorder[0])

		if len(preorder) == 1:
				return root

		left_root = index[preorder[1]]

		root.left = self.constructFromPrePost(preorder[1:left_root + 2],
		                                      postorder[:left_root + 1])
		root.right = self.constructFromPrePost(preorder[left_root + 2:],
		                                       postorder[left_root + 1:-1])

		return root