def findPeakElement(self, nums: List[int]) -> int:
		left = 0
		right = len(nums) - 1

		while left <= right:
				mid = left + (right - left) // 2

				# left side having peak
				if mid > 0 and nums[mid] < nums[mid - 1]:
						right = mid - 1
				# right side having peak
				elif mid < len(nums) - 1 and nums[mid] < nums[mid + 1]:
						left = mid + 1
				else:
						return mid