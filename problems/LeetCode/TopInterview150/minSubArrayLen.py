class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:

        min_length = len(nums) + 1

        left = 0
        current_sum = 0

        for right, num in enumerate(nums):
            current_sum += num

            while current_sum >= target:
                min_length = min(min_length, right - left + 1)
                current_sum -= nums[left]
                left += 1

        return 0 if min_length == len(nums) + 1 else min_length


# Time: O(n)
# Space: O(1)


class Solution2:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:

        min_length = len(nums) + 1
        prefix_sum = [0]

        for num in nums:
            prefix_sum.append(prefix_sum[-1] + num)

        for left in range(len(prefix_sum)):
            required_sum = prefix_sum[left] + target
            right = bisect_left(prefix_sum, required_sum)

            if right < len(prefix_sum):
                min_length = min(min_length, right - left)

        return 0 if min_length == len(nums) + 1 else min_length


# Time: O(n*log(n))
# Space: O(n)