def rob(self, nums: List[int]) -> int:

		if len(nums) == 1: return nums[0]

		ans1 = ans2  = 0

		def helper(arr): 
				rob1 = rob2 = 0
				# [rob1, rob2, n, n + 1, n +2 ...]
				for n in arr:
						temp = max(rob1 + n, rob2)
						rob1 = rob2
						rob2 = temp
				return rob2

		ans1 = helper(nums[:-1])
		ans2 = helper(nums[1:])

		return max(ans1, ans2)