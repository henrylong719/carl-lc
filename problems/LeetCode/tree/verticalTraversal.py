def verticalTraversal(self, root: Optional[TreeNode]) -> List[List[int]]:

		d = defaultdict(list)

		def dfs(node: Optional[TreeNode], row: int, col: int) -> None:
				if not node:
						return
				
				d[col].append({
						'row': row,
						'val': node.val
				})

				dfs(node.left, row + 1, col - 1)
				dfs(node.right, row +1, col + 1)

		dfs(root,0, 0)

		sorted_dict = dict(sorted(d.items()))

		ans = []

		for x in sorted_dict:
				sorted_dict[x].sort(key=lambda x: (x['row'], x['val']))
				ans.append([item['val'] for item in sorted_dict[x]]) 
				
		return ans


def verticalTraversal2(self, root: Optional[TreeNode]) -> List[List[int]]:

		col_map = defaultdict(list)

		def dfs(node: Optional[TreeNode], row: int, col: int) -> None:
				if not node:
						return
				
				col_map[col].append((row,node.val))

				dfs(node.left, row + 1, col - 1)
				dfs(node.right, row +1, col + 1)

		dfs(root,0, 0)

		ans = []

		for col in sorted(col_map.keys()):
				col_map[col].sort(key=lambda x: (x[0], x[1]))
				ans.append([val for _, val in col_map[col]])
		return ans