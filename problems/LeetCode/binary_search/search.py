def search(self, nums: List[int], target: int) -> int:
		left, right = 0, len(nums) - 1

		while left <= right:

				mid = (left + right) // 2

				if nums[mid] == target:
						return mid
				
				# left portion of the array
				if nums[mid] >= nums[left]:
						if nums[left] <= target <= nums[mid]:
								right = mid - 1
						else:
								left = mid + 1
				# right portion of the array
				else:
						if nums[mid] <= target <= nums[right]:
								left = mid + 1
						else:
								right = mid - 1
		return -1