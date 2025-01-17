def minDepth1(self, root: Optional[TreeNode]) -> int:
		if not root: return 0

		queue = deque([(1, root)])

		while queue:
				depth, node = queue.popleft()

				if not node.left and not node.right:
						return depth
				if node.left:
						queue.append((depth + 1, node.left))
				if node.right:
						queue.append((depth + 1, node.right))
      
      
def minDepth2(self, root: Optional[TreeNode]) -> int:
		ans = inf

		def dfs(node: Optional[TreeNode], cnt: int) -> None:
				if not node:
						return
				
				nonlocal ans
				cnt += 1
				if cnt >= ans:
						return 

				if node.left is node.right:
					
						ans = min(cnt, ans)
						return
				
				dfs(node.left, cnt)
				dfs(node.right, cnt)

		dfs(root, 0)
		
		return ans if root else 0