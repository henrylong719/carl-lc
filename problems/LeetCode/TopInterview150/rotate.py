class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """

        n = len(nums)
        _k = k % n
        if _k == n:
            return

        arr = nums[(n - _k) :] + nums[: (n - _k)]

        for i in range(n):
            nums[i] = arr[i]
            

# Time: O(n)
# Space: O(n)


class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """

        n = len(nums)
        k %= n

        def reverse(left: int, right: int) -> None:

            while left < right:
                nums[left], nums[right] = nums[right], nums[left]
                left += 1
                right -= 1
        
        # reverse the whole array
        reverse(0, n-1)
        # reverse the first k elements
        reverse(0, k-1)
        # reverse the remaining elements
        reverse(k, n-1)

        

# Time: O(n)
# Space: O(1)