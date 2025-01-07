def minimumTime(self, time: List[int], totalTrips: int) -> int:
		min_t = min(time)
		left = min_t - 1
		right = min_t * totalTrips

		while left + 1 < right:
				mid = (left + right) // 2

				if sum(mid // t for t in time) >= totalTrips:
						right = mid 
				else:
						left = mid
		
		return right

# optimization
def minimumTime(self, time: List[int], totalTrips: int) -> int:
		min_t = min(time)
		avg = (totalTrips - 1) // len(time) + 1
		left = min(time) * avg - 1
		right = min(min_t * totalTrips, max(time) * avg)

		while left + 1 < right:
				mid = (left + right) // 2

				if sum(mid // t for t in time) >= totalTrips:
						right = mid 
				else:
						left = mid
		
		return right