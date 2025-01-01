

from cmath import inf
from typing import List


def minSubArrayLen(self, target: int, nums: List[int]) -> int:
		sum = 0
		window_size = inf
		window_start = 0

		for window_end in range(len(nums)):
				
				sum += nums[window_end]

				while sum - nums[window_start] >= target:
						sum -= nums[window_start]
						window_start += 1
				
				if sum >= target:
						window_size = min(window_size, window_end - window_start + 1)

		return window_size if sum >= target else 0