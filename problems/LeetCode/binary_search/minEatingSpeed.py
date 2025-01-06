from math import ceil
from typing import List



def calTime(piles: List[int], speed: int) -> int:

		ans = 0

		for piel in piles:
				ans += ceil(piel / speed)
    
		print(ans)
		return ans

def minEatingSpeed(piles: List[int], h: int) -> int:

		piles.sort()

		# min k
		left  = 1
		# max k
		right = piles[len(piles) - 1]

		while left < right:

				mid = (left + right) // 2

				t = calTime(piles, mid)

				if t >= h:
						return mid
				elif t < h:
					right = mid - 1
				else:
					left = mid + 1
		
		return left


print(minEatingSpeed([30,11,23,4,20], 6))