

def longestOnes(self, nums: List[int], k: int) -> int:
		ans = 0
		left = 0
		count0 = 0

		for right, i in enumerate(nums):
				
				# add 1 and 0 into the window and count the num of 0
				count0 += 1 - i

				# shrink the window
				while count0 > k:
						count0 -= 1 - nums[left]
						left += 1
				
				ans = max(ans, right - left + 1)

		return ans
  
  
  