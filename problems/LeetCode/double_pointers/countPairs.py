class Solution:
    def countPairs(self, nums: List[int], target: int) -> int:
        nums.sort()
        n = len(nums)
        count = 0

        for i in range(n - 1):
            right = i + 1
            sum = nums[i] + nums[right]

            while sum < target and right < n:
                count += 1
                right += 1
                if right < n:
                    sum = nums[i] + nums[right]
        
        return count
      
      
    def countPairs2(self, nums: List[int], target: int) -> int:
        nums.sort()
        ans = 0
        left = 0
        right = len(nums) - 1

        while left < right:
            if nums[left] + nums[right] < target:
                ans += right - left
                left += 1
            else:
                right -= 1
        
        return ans

# time complexity O(nlog(n)) (sorting), n is the length of the nums
# space complexity O(1)