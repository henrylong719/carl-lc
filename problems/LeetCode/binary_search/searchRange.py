def lower_bound (self, nums: List[int], target: int) -> List[int]:

		left, right = 0, len(nums) - 1

		while left <= right:

				mid = (left + right) // 2

				if target <= nums[mid]:
						right = mid - 1
				else:
						left = mid + 1

		return left

def searchRange(self, nums: List[int], target: int) -> List[int]:
		start = self.lower_bound(nums, target)
		if start == len(nums) or nums[start] != target:
				return [-1,-1]
		end = self.lower_bound(nums, target + 1) - 1
		return [start, end]