def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:

		ans = []
		comb = []
		candidates.sort()

		def backtrack(i: int, t: int) -> None:

				if t == 0:
						ans.append(comb.copy())
						return
				
				if candidates[i] > t: 
						return

				for j in range(i, len(candidates)):
						comb.append(candidates[j])
						backtrack(j, t - candidates[j])
						comb.pop()

		backtrack(0,target)
		return ans