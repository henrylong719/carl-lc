def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:

		if not root: return []

		ans = []
		queue = []
		queue = deque([(0, root)])
		dic = defaultdict(list)

		while len(queue):
				depth, node = queue.popleft()
				dic[depth].append(node.val)

				if node.left:
						queue.append([depth + 1, node.left])
				if node.right:
						queue.append([depth + 1, node.right])

		for value in dic:
				ans.append(dic[value])
		
		return ans


def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
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
				
				ans.append(vals)

		return ans