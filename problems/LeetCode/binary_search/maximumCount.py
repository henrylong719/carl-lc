from typing import List


def lower_bound(nums: List[int], target: int) -> int:
		left, right = 0, len(nums) - 1

		while left <= right:

				mid = (left + right) // 2

				if target <= nums[mid]:
						right = mid - 1
				else:
						left = mid + 1
		
		return left


print(lower_bound([-3,-2,-1,0,0,0,1],1))