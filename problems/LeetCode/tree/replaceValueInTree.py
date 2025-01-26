def replaceValueInTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
		root.val = 0
		q = deque([root])

		while q:
				
				tmp = q
				q = []
				# Get the sum of next level nodes
				next_level_sum = 0

				for node in tmp:
						if node.left:
								next_level_sum += node.left.val
								q.append(node.left)
						if node.right:
								next_level_sum += node.right.val
								q.append(node.right)
				
				for node in tmp:
						chilren_sum = (node.left.val if node.left else 0) + (node.right.val if node.right else 0)
						if node.left:
								node.left.val = next_level_sum - chilren_sum
						if node.right:
								node.right.val = next_level_sum - chilren_sum

		return root