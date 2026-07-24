class Solution:
    def canJump(self, nums: List[int]) -> bool:

        n = len(nums)
        goal = n - 1

        for i in range(n - 2, -1, -1):
            if i + nums[i] >= goal:
                goal = i

        return goal == 0



# Time: O(n)
# Space: O(1)