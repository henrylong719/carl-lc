class Solution:
    def jump(self, nums: List[int]) -> int:

        n = len(nums)
        goal = n - 1
        steps = 0

        while goal != 0:
            furthest = goal
            for i in range(goal - 1, -1, -1):
                if i + nums[i] >= goal:
                    furthest = i
            goal = furthest
            steps += 1

        return steps
