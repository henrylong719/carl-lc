class Solution:
    def triangleNumber(self, nums: List[int]) -> int:
        nums.sort()
        ans = 0
        n = len(nums)

        for k in range(n - 1, 1, -1):

						# Optimization 1
            if nums[0] + nums[1] > nums[k]:
                # C(k+1, 3)
                ans += (k+1) * k * (k-1) // 6
                break

						# Optimization 2
            if nums[k-2] + nums[k-1] <= nums[k]:
                continue

            i = 0
            j = k - 1

            while i < j:
                if nums[i] + nums[j] > nums[k]:
                    ans += j - i
                    j -= 1
                else:
                    i += 1

        return ans
