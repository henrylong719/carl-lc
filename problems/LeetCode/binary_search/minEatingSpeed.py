def minEatingSpeed(self, piles: List[int], h: int) -> int:

		piles.sort()
		n = len(piles)
		left = 0
		right = max(piles)

		while left + 1 < right:

				mid = (left + right) // 2

				if sum((p - 1) // mid for p in piles) <= h - n:
						right = mid
				else:
						left = mid
		
		return right