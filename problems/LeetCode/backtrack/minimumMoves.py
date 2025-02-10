def minimumMoves(self, grid: List[List[int]]) -> int:
		from_ = []
		to = []

		for i, row in enumerate(grid):
				for j, count in enumerate(row):
						if count > 1:
								from_.extend([(i,j)] * (count - 1))
						elif count == 0:
								to.append((i,j))

				
		ans = inf
		for from2 in permutations(from_):
				total = 0
				for (x1,y1), (x2,y2) in zip(from2, to):
						total += abs(x1 - x2) + abs(y1-y2)
				
				ans = min(ans, total)

		return ans
		