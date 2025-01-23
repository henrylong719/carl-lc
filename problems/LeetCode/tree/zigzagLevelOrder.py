def zigzagLevelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:

		if not root: return []
		ans = []
		q = deque([root])

		while q:
				vals = []
				for _ in range(len(q)):
						node = q.popleft() 
						vals.append(node.val)
						if node.left: q.append(node.left)
						if node.right: q.append(node.right)
				
				if len(ans) % 2 != 0:
						vals.reverse()
						
				ans.append(vals)

		return ans