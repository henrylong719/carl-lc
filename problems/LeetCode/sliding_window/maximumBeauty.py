def maximumBeauty(self, nums: List[int], k: int) -> int:
		nums.sort()
		ans = 0
		left = 0

		for right,y in enumerate(nums):
				while y - nums[left] > 2 * k:
						left += 1
				ans = max(ans, right - left + 1)
				
		return ans