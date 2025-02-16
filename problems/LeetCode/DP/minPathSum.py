def minPathSum(self, grid: List[List[int]]) -> int:
		ROWS, COLS = len(grid), len(grid[0])

		# [[inf, inf, inf, inf],[inf, inf, inf, inf]] ,,,
		ans = [[float("inf")] * (COLS + 1) for r in range(ROWS + 1)]
		ans[ROWS][COLS - 1] = 0

		for row in range(ROWS -1, -1, -1):
				for col in range(COLS -1, -1, -1):
						ans[row][col] = min(ans[row + 1][col], ans[row][col + 1]) + grid[row][col]

		return ans[0][0]