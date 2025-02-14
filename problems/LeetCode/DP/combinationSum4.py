def combinationSum4(self, nums: List[int], target: int) -> int:

		@cache
		def dfs(i: int) -> int:
				if i == 0:
						return 1
				return sum(dfs(i - x) for x in nums if x <= i)

		return dfs(target)


def combinationSum4(self, nums: List[int], target: int) -> int:
		dp = {0:1}

		for total in range(1, target+1):
				dp[total] = 0
				for n in nums:
						dp[total] += dp.get(total - n, 0)

		return dp[total]