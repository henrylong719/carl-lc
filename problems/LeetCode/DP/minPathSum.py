def minPathSum(self, grid: List[List[int]]) -> int:
		ROWS, COLS = len(grid), len(grid[0])

		# [[inf, inf, inf, inf],[inf, inf, inf, inf]] ,,,
		ans = [[float("inf")] * (COLS + 1) for r in range(ROWS + 1)]
		ans[ROWS][COLS - 1] = 0

		for row in range(ROWS -1, -1, -1):
				for col in range(COLS -1, -1, -1):
						ans[row][col] = min(ans[row + 1][col], ans[row][col + 1]) + grid[row][col]

		return ans[0][0]


def minPathSum(self, grid: List[List[int]]) -> int:
		ROWS, COLS = len(grid), len(grid[0])

		dp = [float("inf")] * (COLS + 1)
		dp[COLS - 1] = 0

		for row in range(ROWS - 1, -1, -1):
				for col in range(COLS - 1, -1, -1):
						dp[col] = min(dp[col + 1], dp[col]) + grid[row][col]
				
		return dp[0]


# from top to bottom
def minPathSum(self, grid: List[List[int]]) -> int:

		@cache
		def dfs(r: int, c: int):
				if r == 0 and c == 0:
						return grid[r][c]
				
				if r < 0 or c < 0:
						return inf
				
				return min(dfs(r - 1, c), dfs(r, c - 1)) + grid[r][c]

		return dfs(len(grid) - 1, len(grid[0]) - 1)



