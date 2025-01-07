def minimizeArrayValue(self, nums: List[int]) -> int:
		ans = total = nums[0]

		for i in range(1, len(nums)):
				total += nums[i]
				ans = max(ans, ceil(total / (i + 1)))
		
		return ans