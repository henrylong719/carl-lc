def combine(self, n: int, k: int) -> List[List[int]]:
		ans = []
		comb = []

		def dfs(i: int):

				d = k - len(comb)

				if i < d:
						return

				if (len(comb) == k):
						ans.append(comb.copy())
						return

				for j in range(i, 0, -1):
						comb.append(j)
						dfs(j - 1)
						comb.pop()

		dfs(n)
		return ans