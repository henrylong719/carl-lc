def countSubarrays(self, nums: List[int], k: int) -> int:
		maxEle = max(nums)
		left = 0
		ans = 0
		max_count = 0
		n = len(nums)

		for right, x in enumerate(nums):
				if x == maxEle:
						max_count += 1
				
				while max_count >= k:
						ans += n - right
						if nums[left] == maxEle:
								max_count -= 1
						left += 1
						
		return ans
