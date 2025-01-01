class Solution:
    def trap(self, height: List[int]) -> int:
        ans = 0
        n = len(height)
        pre_max = [0] * n

        pre_max[0] = height[0]

        for i in range(1, n):
            pre_max[i] = max(pre_max[i-1], height[i])

        sur_max = [0] * n
        sur_max[-1] = height[n-1]

        for i in range(n-2, -1, -1):
            sur_max[i] = max(sur_max[i+1], height[i])

        for hei, pre, sur in zip(height, pre_max, sur_max):
            ans += min(pre, sur) - hei

        return ans
      
      
    def trap2(self, height: List[int]) -> int:
        ans = 0
        left = 0
        right = len(height) - 1
        pre_max = 0
        sur_max = 0

        while left <= right:
            pre_max = max(pre_max, height[left])
            sur_max = max(sur_max, height[right])

            if pre_max < sur_max:
                ans += pre_max - height[left]
                left += 1
            else:
                ans += sur_max - height[right]
                right -= 1
        
        return ans