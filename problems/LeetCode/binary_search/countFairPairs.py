from bisect import bisect_left, bisect_right


def countFairPairs(self, nums: List[int], lower: int, upper: int) -> int:
		nums.sort()
		n = len(nums)
		ans = 0

		# lower - nums[j] <= nums[i] <= upper - nums[j]

		for j, x in enumerate(nums):

				right = bisect_right(nums, upper - nums[j], 0, j)
				left = bisect_left(nums, lower - nums[j], 0, j)
				ans += right - left

		return ans