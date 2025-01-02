def minOperations(self, nums: List[int], x: int) -> int:
		target = sum(nums) - x

		if target < 0: return -1

		ans = -1
		left = 0
		s = 0

		for right, x in enumerate(nums):
				s += x
				
				# shrink the array
				while s > target:
						s -= nums[left]
						left += 1
				
				if s == target:
						ans = max(ans, right - left + 1)
		
		return -1 if ans < 0 else len(nums) - ans