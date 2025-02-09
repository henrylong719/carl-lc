def permute(self, nums: List[int]) -> List[List[int]]:

		n = len(nums)
		path = [0] * n
		on_path = [False] * n
		ans = []

		def dfs(i:int) -> None:
				if i == n:
						ans.append(path.copy())
						return
				
				for j in range(n):
						if not on_path[j]:
								path[i] = nums[j]
								on_path[j] = True
								dfs(i+1)
								on_path[j] = False
		dfs(0)
		return ans