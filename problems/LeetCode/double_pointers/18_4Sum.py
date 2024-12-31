class Solution:
    def fourSum(self, nums: List[int], target: int) -> List[List[int]]:
        nums.sort()
        n = len(nums)
        ans = []
        
        for i in range(n - 3):
            if i and nums[i] == nums[i - 1]:
                continue

                # optimization 1
                if nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target:
                    break
                # optimization 2
                if nums[i] + nums[-3] + nums[-2] + nums[-1] < target:
                    continue

            for j in range(i + 1, n - 2):
                if j > i + 1 and nums[j] == nums[j - 1]:
                    continue

                # optimization 3
                if nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target:
                    break
                
                # optimization 4
                if nums[i] + nums[j] + nums[-2] + nums[-1] < target:
                    continue
                
                k = j + 1
                l = n - 1

                while k < l:
                    sum = nums[i] + nums[j] + nums[k] + nums[l]
                    if sum > target:
                        l -= 1
                    elif sum < target:
                        k += 1
                    else:
                        ans.append([nums[i],nums[j],nums[k],nums[l]])
                        k += 1
                        while k < l and nums[k] == nums[k-1]:
                            k += 1
                        l -= 1
                        while l > k and nums[l] == nums[l + 1]:
                            l -= 1
        return ans