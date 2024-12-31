class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        nums.sort()
        n = len(nums)
        ans = []

        for i in range(n - 2):
            x = nums[i]

            # skip duplicates 
            if i > 0 and x == nums[i-1]:
                continue
            
            # optimization
            if x + nums[i+1] + nums[i+2] > 0:
                break
            
            if x + nums[-2] + nums[-1] < 0:
                continue
            
            j = i + 1
            k = n - 1

            while j < k:
                sum = x + nums[j] + nums[k]
                if sum > 0:
                    k -= 1
                elif sum < 0:
                    j += 1
                else:
                    ans.append([x, nums[j], nums[k]])
                    j += 1
                    # skip duplicates
                    while j < k and nums[j] == nums[j-1]:
                        j += 1
                    k -= 1
                    while k > j and nums[k] == nums[k+1]:
                        k -= 1
        return ans
                   