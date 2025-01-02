def countSubarrays(self, nums: List[int], k: int) -> int:

			ans = 0
			left = 0
			sum = 0

			for right, x in enumerate(nums):

					sum += x
					
					while sum * (right - left + 1) >= k:
							sum -= nums[left]
							left += 1
					
					ans += right - left + 1
			
			return ans