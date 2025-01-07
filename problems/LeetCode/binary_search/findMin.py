def findMin(self, nums: List[int]) -> int:
		ans = nums[0]
		left, right = 0, len(nums) - 1

		while left <= right:
				# already in sorted array
				if nums[left] < nums[right]:
						ans = min(ans, nums[left])
						break
				
				mid = (left + right) // 2
				ans = min(ans, nums[mid])

				# in the left part
				if nums[mid] >= nums[left]:
						left = mid + 1
				else:
						right = mid - 1
		
		return ans