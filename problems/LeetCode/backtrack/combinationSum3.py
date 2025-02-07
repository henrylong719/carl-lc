def combinationSum3(self, k: int, n: int) -> List[List[int]]:
		comb = []
		ans = []

		def backtrack(i: int, t: int) -> None:

				d = k - len(comb)

				if i < d:
						return
				
				if t < 0 or t > (i * 2 - d + 1) * d // 2:
						return 

				if len(comb) == k:
						ans.append(comb.copy())
						return 

				for j in range(i, 0, -1):
						comb.append(j)
						backtrack(j - 1, t - j)
						comb.pop()

		backtrack(9,n)
		return ans