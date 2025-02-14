def countGoodStrings(self, low: int, high: int, zero: int, one: int) -> int:
		MOD = 10 ** 9 + 7

		@cache
		def dfs(i: int) -> int:
				if i < 0:
						return 0

				if i == 0:
						return 1

				return (dfs(i - zero) + dfs(i - one)) % MOD

		
		return sum(dfs(i) for i in range(low, high + 1)) % MOD


def countGoodStrings(self, low: int, high: int, zero: int, one: int) -> int:
		MOD = 10 ** 9 + 7

		dp = {0:1}

		for i in range(1, high + 1):
				dp[i] = (dp.get(i - one, 0) + dp.get(i - zero, 0)) % MOD
		
		return sum([dp[i] for i in range(low, high + 1)]) % MOD
        