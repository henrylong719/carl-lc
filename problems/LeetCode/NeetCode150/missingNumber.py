class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        s = set(nums)
        for i in range(len(nums) + 1):
            if i not in s:
                return i
            
class Solution:
    def missingNumber(self, nums: List[int]) -> int:

        res = len(nums)

        for i, num in enumerate(nums):
            res ^= i ^ num

        return res
    
class Solution:
    def missingNumber(self, nums: List[int]) -> int:

        n = len(nums)

        total = (1 + n) * n // 2

        return total - sum(nums)


# Time: O(n)
# Space: O(1)