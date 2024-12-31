class Solution:
    def threeSumClosest(self, nums: List[int], target: int) -> int:
        nums.sort()
        ans = inf
        min_diff = inf
        n = len(nums)

        for i in range(n - 2):
            x = nums[i]
            # optimization 1
            if i and x == nums[i-1]:
                continue
            
            # optimization 2
            sum = x + nums[i+1] + nums[i+2]
            if sum > target:
                if sum - target < min_diff:
                    return sum

            # optimization 3
            sum = x + nums[-2] + nums[-1]
            if sum < target:
                if target - sum < min_diff:
                    min_diff = target - sum
                    ans = sum
                    continue
                    
            j = i + 1
            k = n - 1

            while j < k:
                sum = x + nums[j] + nums[k]
                if sum == target:
                    return sum
                diff = abs(target - sum)
                if diff < min_diff:
                    min_diff = diff
                    ans = sum
                if sum < target:
                    j += 1
                else:
                    k -= 1
            
        return ans