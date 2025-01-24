

# Leetcode

### Double Pointers



#### 167. Two Sum II - Input Array Is Sorted (31/12)

```python

def twoSum(self, numbers: List[int], target: int) -> List[int]:
    left = 0
    right = len(numbers) - 1

    while(True):
        current = numbers[left] + numbers[right]
        if current == target:
            return [left + 1, right + 1 ]
        if current > target:
            right -= 1
        else:
            left += 1
            
# Time complexity O(n) - length of numbers
# Space complexity O(1)

```



#### 15. 3Sum (31/12)

```python

def threeSum(self, nums: List[int]) -> List[List[int]]:
  			# time complexity O(nlog(n))
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


# Time complexity O(n^2)
# Space complexity O(1)
```



#### 2824. Count Pairs Whose Sum is Less than Target (31/12)

````python

class Solution:
    def countPairs(self, nums: List[int], target: int) -> int:
        nums.sort()
        n = len(nums)
        count = 0

        for i in range(n - 1):
            right = i + 1
            sum = nums[i] + nums[right]

            while sum < target and right < n:
                count += 1
                right += 1
                if right < n:
                    sum = nums[i] + nums[right]
        
        return count
      
    def countPairs2(self, nums: List[int], target: int) -> int:
        nums.sort()
        ans = 0
        left = 0
        right = len(nums) - 1

        while left < right:
            if nums[left] + nums[right] < target:
                ans += right - left
                left += 1
            else:
                right -= 1
        
        return ans

# time complexity O(nlog(n)) (sorting), n is the length of the nums
# space complexity O(1)

````



#### 16. 3Sum Closest (31/12)

```python

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

# Time complexity O(n^2)
# Space complexity O(1)

```



#### 18. 4Sum (31/12)

```python


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
      
      
  # Time complexity: O(n^3)
  # Space complexity: O(1)
```



#### 611. Valid Triangle Number (31/12)

```python

def triangleNumber(self, nums: List[int]) -> int:
    nums.sort()
    ans = 0
    n =  len(nums)

    for k in range(2, n):
        i = 0
        j = k - 1

        while i < j:
            if nums[i] + nums[j] > nums[k]:
                ans += j - i
                j -= 1
            else:
                i += 1
    return ans
  
def triangleNumber2(self, nums: List[int]) -> int:
    nums.sort()
    ans = 0
    n =  len(nums)

    for k in range(n-1, 1, -1):

        # Optimization 1
        if nums[0] + nums[1] > nums[k]:
            # C(k+1, 3)
            ans += (k+1) * k * (k-1) // 6
            break

        # Optimization 2
        if nums[k-2] + nums[k-1] < nums[k]:
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
  
# Time complexity: O(n^2)
# Space complexity: O(1)

```



#### 11. Container With Most Water (1/1)

```python

def maxArea(self, height: List[int]) -> int:
      left = 0
      right = len(height) - 1
      ans = 0

      while left < right:
          area = (right - left) * (min(height[left], height[right]))
          ans = max(ans, area)

          if height[left] < height[right]:
              left += 1
          else:
              right -= 1
      return ans

# Time complexity O(n)
# Space complexity O(1)
    
```



#### 42. Trapping Rain Water (1/1)

```python

def trap(self, height: List[int]) -> int:
    ans = 0
    n = len(height)
    pre_max = [0] * n

    pre_max[0] = height[0]

    for i in range(1, n):
        pre_max[i] = max(pre_max[i-1], height[i])

    sur_max = [0] * n
    sur_max[-1] = height[n-1]
    
    # range(start, stop, step)
    # start: The loop starts at n-2.
    # stop: The loop stops before -1. This means it will include 0 as the last value.
    # step: -1 indicates that the loop decrements by 1 on each iteration.

    for i in range(n-2, -1, -1):
        sur_max[i] = max(sur_max[i+1], height[i])

    for h, pre, sur in zip(height, pre_max, sur_max):
        ans += min(pre, sur) - h

    return ans
  
# Time complexity: O(n)
# Space complexity: O(n)

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

# Time complexity: O(n)
# Space complexity: O(1)
      
```



### Sliding Window

#### 209. Minimum Size Subarray Sum (1/1)



```python

def minSubArrayLen(self, target: int, nums: List[int]) -> int:
		sum = 0
		window_size = inf
		window_start = 0

		for window_end in range(len(nums)):
				
				sum += nums[window_end]

				while sum - nums[window_start] >= target:
						sum -= nums[window_start]
						window_start += 1
				
				if sum >= target:
						window_size = min(window_size, window_end - window_start + 1)

		return window_size if sum >= target else 0

# Time complexity: O(n)
# Space complexity: O(1)

```



#### 3. Longest Substring Without Repeating Characters (1/1)

```python

from collections import Counter


def lengthOfLongestSubstring(self, s: str) -> int:

		ans = 0
		left = 0
		map = Counter()

		for right, c in enumerate(s):
				
				map[c] += 1

				while map[c] > 1:
						map[s[left]] -= 1
						left += 1
				
				ans = max(ans, right - left + 1)
		
		return ans
  
# Time complexity O(n)
# Space complexity O(128) | O(1) | O(len(set(s)))

```



#### 713. Subarray Product Less Than K (1/1)

```python

def numSubarrayProductLessThanK(self, nums: List[int], k: int) -> int:
		if k <= 1:
				return 0

		prod = 1
		ans = 0
		left = 0

		for right, x in enumerate(nums):
				prod *= x

				while prod >= k:
						prod /= nums[left]
						left += 1
				
				ans += right - left + 1
		
		return ans
  
# Time complexity: O(n)
# Space complexity: O(1)

```



#### 2958. Length of Longest Subarray With at Most K Frequency (1/1)

```python

from collections import Counter


def maxSubarrayLength(self, nums: List[int], k: int) -> int:
		left = 0
		map = Counter()
		ans = 0

		for right, i in enumerate(nums):
				
				map[i] += 1

				while map[i] > k:
						map[nums[left]] -= 1
						left += 1
				
				ans = max(ans, right - left + 1)

		return ans


# Time complexity O(n)
# Space complexity O(set(nums))

```



#### 2730. Find the Longest Semi-Repetitive Substring (1/1)

```python

def longestSemiRepetitiveSubstring(self, s: str) -> int:
		lastRepeatIndex = -1
		ans = 0
		left = 0

    # edge cases
		if len(s) == 1:
				return 1

		for right in range(1, len(s)):
				if s[right] == s[right -1 ]:
						if lastRepeatIndex != -1:
								left = lastRepeatIndex
						lastRepeatIndex = right

				ans = max(ans, right - left + 1)

		
		return ans
  
# Time complexity O(n)
# Space complexity O(1)

```



#### 2779. Maximum Beauty of an Array After Applying Operation (2/1)

```python

def maximumBeauty(self, nums: List[int], k: int) -> int:
		nums.sort()
		ans = 0
		left = 0

		for right,y in enumerate(nums):
				while y - nums[left] > 2 * k:
						left += 1
				ans = max(ans, right - left + 1)
				
		return ans

  
	# Time complexity: O(nlog(n))
  # Space complexity: O(1)
  
```



#### 1004. Max Consecutive Ones III (2/1)

```python


def longestOnes(self, nums: List[int], k: int) -> int:
		ans = 0
		left = 0
		count0 = 0

		for right, i in enumerate(nums):
				
				# add 1 and 0 into the window and count the num of 0
				count0 += 1 - i

				# shrink the window
				while count0 > k:
						count0 -= 1 - nums[left]
						left += 1
				
				ans = max(ans, right - left + 1)

		return ans
  
  # Time complexity: O(n)
  # Space complexity: O(1)


```



#### 2962. Count Subarrays Where Max Element Apprears at Least K Times (2/1)

```python

def countSubarrays(self, nums: List[int], k: int) -> int:
		maxEle = max(nums)
		left = 0
		ans = 0
		max_count = 0
		n = len(nums)

		for right, x in enumerate(nums):
				if x == maxEle:
						max_count += 1
				
				while max_count >= k:
						ans += n - right
						if nums[left] == maxEle:
								max_count -= 1
						left += 1
						
		return ans
  
  
 	# Time complexity: O(n)
  # Space complexity: O(1)

```



#### 1658. Minimum Operation to Reduce X to Zero (2/1)

```python

def minOperations(self, nums: List[int], x: int) -> int:
		target = sum(nums) - x

		if target < 0: return -1

		ans = -1
		left = 0
		s = 0

		for right, x in enumerate(nums):
				s += x
				
				# shrink the array
				while s > target:
						s -= nums[left]
						left += 1
				
				if s == target:
						ans = max(ans, right - left + 1)
		
		return -1 if ans < 0 else len(nums) - ans


 	# Time complexity: O(n)
  # Space complexity: O(1)
  
```



#### 2302. Count Subarrays With Score Less Than k (2/1)

```python

def countSubarrays(self, nums: List[int], k: int) -> int:

			ans = 0
			left = 0
			sum = 0

			for right, x in enumerate(nums):

					sum += x
					
					while sum * (right - left + 1) >= k:
							sum -= nums[left]
							left += 1
					
					ans += right - left + 1
			
			return ans
    
  # Time complexity: O(n)
  # Space complexity: O(1)
    
```



#### 76*. Minimum Window Substring (3/1)

```python

def minWindow(self, s: str, t: str) -> str:

		charCount = Counter(t)
		left = 0
		minStrLen = len(s) + 1
		ans = ''

		for right, x in enumerate(s):
				charCount[x] -= 1

				# all char in t are included
				while max(charCount.values()) == 0:
						# find min substring                
						if right - left + 1 < minStrLen:
								minStrLen = right - left + 1
								ans = s[left: right + 1]
						
						charCount[s[left]] += 1
						left += 1

		return ans
  
  
def minWindow2(self, s: str, t: str) -> str:
    ans_left, ans_right = -1, len(s)
    s_count = Counter()
    t_count = Counter(t)
    left = 0

    for right, x in enumerate(s):
        s_count[x] += 1

        while s_count >= t_count:
            if right - left < ans_right - ans_left:
                ans_left, ans_right = left, right

            s_count[s[left]] -= 1
            left += 1

    return '' if ans_left == -1 else s[ans_left : ans_right + 1]

# Time complexity: O(n * k)

# The critical part is the check while max(charCount.values()) == 0:. Each time we do this check, it costsO(k), because max(...) runs in time proportional to the number of keys (distinct characters) in charCount.

# Spece complexity: O(n + k) or O(n)
# k distinct characters

# https://leetcode.cn/problems/minimum-window-substring/solutions/2713911/liang-chong-fang-fa-cong-o52mn-dao-omnfu-3ezz/

```



#### 1234*. Replace the Substring for Balanced String 





### Binary Search



#### 34. Find First and Last Position of Element in Sorted Array (3/1)



```python

def lower_bound (self, nums: List[int], target: int) -> List[int]:

		left, right = 0, len(nums) - 1

		while left <= right:

				mid = (left + right) // 2

				if target <= nums[mid]:
						right = mid - 1
				else:
						left = mid + 1

		return left

def searchRange(self, nums: List[int], target: int) -> List[int]:
		start = self.lower_bound(nums, target)
		if start == len(nums) or nums[start] != target:
				return [-1,-1]
		end = self.lower_bound(nums, target + 1) - 1
		return [start, end]


  
# Time complexity: O(log(n))
# Spece complexity: O(1)

```



#### 2529. Maximum Count of Positive Integer and Negative Integer (3/1)

```python

def lower_bound(self, nums: List[int], target: int) -> int:
    left, right = 0, len(nums) - 1

    while left <= right:

        mid = (left + right) // 2

        if target <= nums[mid]:
            right = mid - 1
        else:
            left = mid + 1

    return left

def maximumCount(self, nums: List[int]) -> int:

    neg = self.lower_bound(nums, 0)
    pos = len(nums) - self.lower_bound(nums, 1)

    return max(neg, pos)
  
# Time complexity: O(log(n))
# Spece complexity: O(1)

# The rule of lower_bound
# if the target is in nums, return lower bound of the target
# if the target is not in nums, return the lower bound of the num which is larger than the  target; if there is no such larger number, return the length of the array

```



#### 2300. Successful Pairs of Spells and Potions (3/1)

```python

def lower_bound(self, nums: List[int], target: int) -> int:
    left, right = 0, len(nums) - 1 

    while left <= right:

        mid = (left + right) // 2

        if target <= nums[mid]:
            right = mid - 1
        else:
            left = mid + 1

    return left

def successfulPairs(self, spells: List[int], potions: List[int], success: int) -> List[int]:
    potions.sort()
    ans = []
    n = len(potions)

    for i in spells:
        val = ceil(success / i)
        low = self.lower_bound(potions, val)
        ans.append(n - low)

    return ans



# Time complexity: O((n + m)log m)
# m: length of potions, sorting: O(mlogm)
# n times binary search and O(log(m) each time
# mlog(m) + nlog(m) = (m + n)log(m)

# Space complexity: O(1)


```



#### 2563. Count the Number of Fair Pairs (3/1)

```python


from bisect import bisect_left, bisect_right


def countFairPairs(self, nums: List[int], lower: int, upper: int) -> int:
		nums.sort()
		n = len(nums)
		ans = 0

		# lower - nums[j] <= nums[i] <= upper - nums[j]

		for j, x in enumerate(nums):

				right = bisect_right(nums, upper - nums[j], 0, j)
				left = bisect_left(nums, lower - nums[j], 0, j)
				ans += right - left

		return ans


# Time complexity: O(nlog(n))
# Spece complexity: O(1)


# The bisect_right() method is provided by the bisect module, which returns the right-most index to insert the given element while maintaining the sorted order.
# https://www.educative.io/answers/what-is-bisectbisectright-in-python


```



#### 2080. Range Frequency Queries (3/1)

```python


from bisect import bisect_left, bisect_right
from collections import defaultdict
from typing import List


def bisect_right(a, x, lo=0, hi=None, *, key=None):
    """Return the index where to insert item x in list a, assuming a is sorted.

    The return value i is such that all e in a[:i] have e <= x, and all e in
    a[i:] have e > x.  So if x already appears in the list, a.insert(i, x) will
    insert just after the rightmost x already there.

    Optional args lo (default 0) and hi (default len(a)) bound the
    slice of a to be searched.

    A custom key function can be supplied to customize the sort order.
    """

    if lo < 0:
        raise ValueError('lo must be non-negative')
    if hi is None:
        hi = len(a)
    # Note, the comparison uses "<" to match the
    # __lt__() logic in list.sort() and in heapq.
    if key is None:
        while lo < hi:
            mid = (lo + hi) // 2
            if x < a[mid]:
                hi = mid
            else:
                lo = mid + 1
    else:
        while lo < hi:
            mid = (lo + hi) // 2
            if x < key(a[mid]):
                hi = mid
            else:
                lo = mid + 1
    return lo

	def bisect_left(a, x, lo=0, hi=None, *, key=None):
    """Return the index where to insert item x in list a, assuming a is sorted.

    The return value i is such that all e in a[:i] have e < x, and all e in
    a[i:] have e >= x.  So if x already appears in the list, a.insert(i, x) will
    insert just before the leftmost x already there.

    Optional args lo (default 0) and hi (default len(a)) bound the
    slice of a to be searched.

    A custom key function can be supplied to customize the sort order.
    """

    if lo < 0:
        raise ValueError('lo must be non-negative')
    if hi is None:
        hi = len(a)
    # Note, the comparison uses "<" to match the
    # __lt__() logic in list.sort() and in heapq.
    if key is None:
        while lo < hi:
            mid = (lo + hi) // 2
            if a[mid] < x:
                lo = mid + 1
            else:
                hi = mid
    else:
        while lo < hi:
            mid = (lo + hi) // 2
            if key(a[mid]) < x:
                lo = mid + 1
            else:
                hi = mid
    return lo 
  
  
class RangeFreqQuery:

    def __init__(self, arr: List[int]):
        pos = defaultdict(list)

        for i, x in enumerate(arr):
            pos[x].append(i)
        
        self.pos = pos
        
    def query(self, left: int, right: int, value: int) -> int:
        arr = self.pos[value]
        return bisect_right(arr, right) - bisect_left(arr, left)
      
      
      
  # Time Complexity:
  # Initialization: O(n)
  # Query: O(log(n)))
  
  # Space Complexity: O(n)
  
   
```



#### 2080. H-Index II (6/1)

```python


def hIndex(self, citations: List[int]) -> int:

    # Have at least n papers cited 

    left = 1
    right = len(citations) - 1

    while left <= right:

        mid = (left + right) // 2

        if citations[-mid] >= mid:
            left = mid + 1
        else:
            right = mid - 1

    return right
  
# Time complexity: O(log(n))
# Spece complexity: O(1)

# https://leetcode.cn/problems/h-index-ii/solutions/2504326/tu-jie-yi-tu-zhang-wo-er-fen-da-an-si-ch-d15k/
```





#### 875. Koko Eating Bananas (6/1)

```python

def minEatingSpeed(self, piles: List[int], h: int) -> int:

		piles.sort()
		n = len(piles)
		left = 0
		right = max(piles)

		while left + 1 < right:

				mid = (left + right) // 2

				if sum((p - 1) // mid for p in piles) <= h - n:
						right = mid
				else:
						left = mid
		
		return right
  
  # Time complexity: O(nlog(n))
	# Spece complexity: O(1)
  
```



#### Minimum Time to Complete Trips (7/1)

```python

def minimumTime(self, time: List[int], totalTrips: int) -> int:
		min_t = min(time)
		left = min_t - 1
		right = min_t * totalTrips

		while left + 1 < right:
				mid = (left + right) // 2

				if sum(mid // t for t in time) >= totalTrips:
						right = mid 
				else:
						left = mid
		
		return right
  
  
  def minimumTime(self, time: List[int], totalTrips: int) -> int:
		min_t = min(time)
		avg = (totalTrips - 1) // len(time) + 1
		left = min(time) * avg - 1
		right = min(min_t * totalTrips, max(time) * avg)

		while left + 1 < right:
				mid = (left + right) // 2

				if sum(mid // t for t in time) >= totalTrips:
						right = mid 
				else:
						left = mid
		
		return right
  
  # Time complexity: O(nlog(n))
	# Spece complexity: O(1)
  # https://leetcode.cn/problems/minimum-time-to-complete-trips/solutions/1295955/er-fen-da-an-python-yi-xing-gao-ding-by-xwvs8/
  
```



#### 2439. Minimize Maximum of Array (7/1)

```python

def minimizeArrayValue(self, nums: List[int]) -> int:
		ans = total = nums[0]

		for i in range(1, len(nums)):
				total += nums[i]
				ans = max(ans, ceil(total / (i + 1)))
		
		return ans


  # Time complexity: O(n)
  # Space complexity: O(1)
  
```



#### 2517*. Maximum Tasiness of Candy Basket 

```python



```



#### 2861*. Maximum Number of Alloys



### Binary Search II

#### 162. Find Peak Element (7/1)

```python

def findPeakElement(self, nums: List[int]) -> int:
    left = 0
    right = len(nums) - 1

    while left <= right:
        mid = left + (right - left) // 2

        # left side having peak
        if mid > 0 and nums[mid] < nums[mid - 1]:
            right = mid - 1
        # right side having peak
        elif mid < len(nums) - 1 and nums[mid] < nums[mid + 1]:
            left = mid + 1
        else:
            return mid

  
  # Time complexity: O(log(n)
  # Space complexity: O(1)
          

```



#### 153. Find Minimum in Rotated Sorted Array (7/1)

```python

def findMin(self, nums: List[int]) -> int:
		ans = nums[0]
		left, right = 0, len(nums) - 1

		while left <= right:
				# already in sorted array
				if nums[left] < nums[right]:
						ans = min(ans, nums[left])
						break
				
				mid = (left + right) // 2
				ans = min(ans, nums[mid])

				# in the left part
				if nums[mid] >= nums[left]:
						left = mid + 1
				else:
						right = mid - 1
		
		return ans
  
    def findMin2(self, nums: List[int]) -> int:
      left = 0
      right = len(nums) - 2

      while left <= right:

          mid = (left + right) // 2

          if nums[mid] < nums[-1]:
              right = mid - 1
          else:
              left = mid + 1

      return nums[left]
    
    def findMin3(self, nums: List[int]) -> int:
      left = 0
      right = len(nums) - 1

      while left < right:

          mid = (left + right) // 2

          if nums[mid] > nums[right]:
              left = mid + 1
          else:
              right = mid

      return nums[left]

  
  # Time complexity: O(log(n)
  # Space complexity: O(1)
  
```



#### 33. Search in Rotated Sorted Array (7/1)

```python

def search(self, nums: List[int], target: int) -> int:
		left, right = 0, len(nums) - 1

		while left <= right:

				mid = (left + right) // 2

				if nums[mid] == target:
						return mid
				
				# left portion of the array
				if nums[mid] >= nums[left]:
						if nums[left] <= target <= nums[mid]:
								right = mid - 1
						else:
								left = mid + 1
				# right portion of the array
				else:
						if nums[mid] <= target <= nums[right]:
								left = mid + 1
						else:
								right = mid - 1
		return -1
  
  # Time complexity: O(log(n)
  # Space complexity: O(1)
  
```



#### 1901. Find a Peak Element II (8/1)

```python

def findPeakGrid(self, mat: List[List[int]]) -> List[int]:
		left = 0
		right = len(mat) - 2

		while left <= right:
				i = (left + right) // 2
				j = self.indexOfMax(mat[i])

				# the peak is in the above
				if mat[i][j] > mat[i+1][j]:
						right = i - 1
				else:
						left = i + 1    

		return [left, self.indexOfMax(mat[left]) ]

def indexOfMax(self, arr: List[int]) -> int:
		idx = 0
		
		for i in range(len(arr)):
				if arr[i] > arr[idx]:
						idx = i
		return idx



def findPeakGrid2(self, mat: List[List[int]]) -> List[int]:
		left = 0
		right = len(mat) - 2

		while left <= right:

				i = (left + right) // 2
				mx = max(mat[i])

				if mx > mat[i + 1][mat[i].index(mx)]:
						right = i - 1
				else:
						left = i + 1
		
		return [left, mat[left].index(max(mat[left]))]


  # Time complexity: O(nlog(n)
  # Space complexity: O(1)


```



#### 154. Find Minimum in Rotated Sorted Array II (8/1)

```python

def findMin(self, nums: List[int]) -> int:
		left = 0
		right = len(nums) - 1

		while left < right:
				mid = (left + right) // 2

				if nums[mid] > nums[right]:
						left = mid + 1
				elif nums[mid] < nums[right]:
						right = mid
				else:
						right = right - 1
		
		return nums[left]
  
  # Time complexity: O(log(n)
  # Space complexity: O(1)
  
 
```



### Linked List (Reverse)

#### 206. Reverse Linked List (8/1)

```python

def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:

		pre = None
		cur = head

		while cur:
				next = cur.next
				cur.next = pre
				pre = cur
				cur = next

		return pre
  
# Time complexity: O(n)  
# Space complexity: O(1)

```



#### 92. Reverse Linked List II (9/1)

```python

def reverseBetween(head: Optional[ListNode], left: int, right: int) -> Optional[ListNode]:
		dummyNode = ListNode()
		dummyNode.next = head
		leftPrev = dummyNode
		cur = head

		# move leftPrev pointer to the one left position of the left
		for i in range (0, left - 1):
				leftPrev = cur
				cur = cur.next

		
		prev = ListNode()
		# reverse nodes between left and right
		for i in range(0, right - left + 1):
				temp = cur.next
				cur.next = prev
				prev = cur
				cur = temp
		
		leftPrev.next.next = cur
		leftPrev.next = prev

		return dummyNode.next
  
  
# Time complexity: O(n)  
# Space complexity: O(1)

```



#### 25. Reverse Nodes in K-Group (9/1)



```python

def reverseKGroup(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
		n = 0
		cur = head

		while cur:
				n = n + 1
				cur = cur.next

		dummyNode = ListNode(next = head)
		leftPrev = dummyNode
		prev = ListNode()
		cur = dummyNode.next

		while n >= k:
				
				n = n - k

				# reverse nodes
				for _ in range(0, k):
						temp = cur.next
						cur.next = prev
						prev = cur
						cur = temp
				
				nxt = leftPrev.next
				leftPrev.next.next = cur
				leftPrev.next = prev
				leftPrev = nxt
		
		return dummyNode.next
  
  
# Time complexity: O(n)  
# Space complexity: O(1)
  

```



#### 24. Swap Nodes in Pairs (9/1)

```python

def swapPairs(self, head: Optional[ListNode]) -> Optional[ListNode]:
    dummyNode = ListNode(next = head)
    prev = dummyNode
    cur = head

    while cur and cur.next:
        nextPair = cur.next.next
        second = cur.next

        # swap
        second.next = cur
        cur.next = nextPair
        prev.next = second

        prev = cur
        cur = nextPair

    return dummyNode.next
  
	# Time complexity: O(n)  
	# Space complexity: O(1)
  
```





#### 445. Add Two Numbers II (9/1)

```python

def reverseList(self, head: ListNode) -> ListNode:

		prev = None
		cur = head

		while cur:
				next = cur.next
				cur.next = prev
				prev = cur
				cur = next
		
		return prev

def addTwoList(self, revL1: ListNode, revL2: ListNode) -> ListNode:
		carry = 0
		dummyNode = ListNode()
		cur = dummyNode

		while revL1 or revL2 or carry:

				res = 0

				if revL1:
						res = res + revL1.val
						revL1 = revL1.next
				
				if revL2:
						res = res + revL2.val
						revL2 = revL2.next
				
				res += carry

				carry = res // 10
				res = res % 10

				cur.next = ListNode(res)
				cur = cur.next

		return dummyNode.next

def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
		revL1 = self.reverseList(l1)
		revL2 = self.reverseList(l2)

		revL3 = self.addTwoList(revL1, revL2)
		ans = self.reverseList(revL3)

		return ans
  
  # key: reverse and add them up!
  # Time complexity: O(n + m)
  # len(L1) = n, len(L2) = m
  # Space complexity: O(n + m)
  
```



#### 2816. Double a Number Represented as a Linked List (10/1)

```python

def reverseList(self, head: ListNode) -> ListNode:
		prev = None
		cur = head

		while cur:
				next = cur.next
				cur.next = prev
				prev = cur
				cur = next
		
		return prev

def doublingList(self, revList: ListNode) -> ListNode:
		carry = 0
		dummyNode = ListNode()
		cur = dummyNode

		while revList or carry:
				
				product = 0

				if revList:
						product += revList.val * 2
						revList = revList.next
				
				if carry:
						product += carry

				carry = product // 10
				product %= 10

				cur.next = ListNode(val = product)
				cur = cur.next

		return dummyNode.next

def doubleIt(self, head: Optional[ListNode]) -> Optional[ListNode]:

		revList = self.reverseList(head)

		doubledList = self.doublingList(revList)
		
		ans = self.reverseList(doubledList)

		return ans

  
  # key: reverse and double it!
  
	# Time complexity: O(n)
  # Space complexity: O(n)

```



### Linked List (fast and slow pointer)

#### 876. Middle of the Linked List (10/1)

```python

def middleNode(self, head: Optional[ListNode]) -> Optional[ListNode]:
		fast = head
		slow = head

		while fast and fast.next:
				slow = slow.next
				fast = fast.next.next

		return slow
  
  # Time complexity: O(n)
  # Space complexity: O(1)

```



#### 141. Linked List Cycle (10/1)

```python

def hasCycle(self, head: Optional[ListNode]) -> bool:
		if not head: return False

		fast = head
		slow = head

		while fast and fast.next:
				fast = fast.next.next
				slow = slow.next

				if fast == slow:
						return True
				
		return False
  
  
  # Time complexity: O(n)
  # Space complexity: O(1)


```



#### 142. Linked List Cycle II (10/1)

```python

def detectCycle(self, head: Optional[ListNode]) -> Optional[ListNode]:
		if not head: return None

		fast = head
		slow = head

		while fast and fast.next:
				fast = fast.next.next
				slow = slow.next

				if fast == slow:
						fast = head
						while fast != slow:
								fast = fast.next
								slow = slow.next
						
						return fast
		
		return None
  
  
  # key: jumping back to head when fast meets slow
  # https://github.com/henrylong719/carl-lc/blob/main/Images/142_m_linked_list_cycle_II.png
  
  # Time complexity: O(n)
  # Space complexity: O(1)
  

```





#### 143. Reorder List (12/1)

`Hint: 1. find middle 2. Reverse 3. merge`

```python


def middleNode(self, head: ListNode) -> ListNode:
		fast = head
		slow = head

		while fast and fast.next:
				fast = fast.next.next
				slow = slow.next

		return slow

def reverseList(self, head: ListNode) -> ListNode:
		prev = None
		cur = head

		while cur:
				next = cur.next
				cur.next = prev
				prev = cur
				cur = next

		return prev
				
def reorderList(self, head: Optional[ListNode]) -> None:
		"""
		Do not return anything, modify head in-place instead.
		"""

		mid = self.middleNode(head)
		head2 = self.reverseList(mid)

		while head2.next:
				next = head.next
				next2 = head2.next

				head.next = head2
				head2.next = next

				head = next
				head2 = next2

  
  # Time complexity: O(n)
  # Space complexity: O(1)
  
```



#### 234. Palinkdrome Linked List (12/1)

`Hint: 1. find middle 2. Reverse 3. compare `

```python

def middleNode (self, head: ListNode) -> ListNode:
		fast = slow = head

		while fast and fast.next:
				fast = fast.next.next
				slow = slow.next

		return slow

def reverseList (self, head: ListNode) -> ListNode:
		prev, cur = None, head

		while cur:
				next = cur.next
				cur.next = prev
				prev = cur
				cur = next

		return prev

def isPalindrome(self, head: Optional[ListNode]) -> bool:
		mid = self.middleNode(head)
		head2 = self.reverseList(mid)

		while head2:
				if head.val != head2.val:
						return False
				head = head.next
				head2 = head2.next
		
		return True
		
      
  # Time complexity: O(n)
  # Space complexity: O(1)
    
```





### Linked List (Delete)

#### 237. Delete Node in a Linked List (15/1)

`Hint: How to become another person in the world? Two steps.`

`One, change your appreance to whom you want to be`

`Two, kill that person`



```python

def deleteNode(self, node):
    """
    :type node: ListNode
    :rtype: void Do not return anything, modify node in-place instead.
    """
    node.val = node.next.val
    node.next = node.next.next


# Time complexity: O(1)
# Space complexity: O(1)

```



#### 19. Remove Nth Node From End of List (15/1)



`Hint: Use left and right pointer, right pointer goes first and then left pointer`



```python

def removeNthFromEnd1(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
		if not head: return None

		length = 0
		cur = head
		# Get the length of the List
		while cur:
				length += 1
				cur = cur.next


		dummyNode = ListNode()
		dummyNode.next = head
		cur = dummyNode

		for i in range(0, length - n):
				cur = cur.next

		cur.next = cur.next.next


		return dummyNode.next


def removeNthFromEnd2(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
		left = right = dummyNode = ListNode(next = head)

		for _ in range(n):
				right = right.next
		
		while right.next:
				left = left.next
				right = right.next

		left.next = left.next.next
		return dummyNode.next
  
  # Time complexity: O(n)
	# Space complexity: O(1)

```



#### 83. Remove Duplicates from Sorted List (15/1)



`Hint: keep updating cur.next until find the distinctive one`



```python

def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
    if not head: return None

    cur = head

    while cur.next:
        if cur.next.val == cur.val:
            cur.next = cur.next.next
        else:
            cur = cur.next

    return head
  
  
  # Time complexity: O(n)
	# Space complexity: O(1)
  
```



#### 82. Remove Duplicates from Sorted List II (15/1)



`Hint: Moving cur.next pointer unitl a distinct node`



```python

def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
    if not head: return None

    dummyNode = ListNode(next = head)

    cur = dummyNode

    while cur.next and cur.next.next:
        val = cur.next.val

        # find repetitive
        if val == cur.next.next.val:
            # moving cur.next pointer until a distinctive element
            while cur.next and cur.next.val == val:
                cur.next = cur.next.next
        else:
            cur = cur.next

    return dummyNode.next  
  
  
    
  # Time complexity: O(n)
	# Space complexity: O(1)
  

```



#### 203. Remove linked List Elements (15/1)

`Hint: keep updating cur.next until find the one with value different from val`

```python

def removeElements(self, head: Optional[ListNode], val: int) -> Optional[ListNode]:

		dummyNode = ListNode(next = head)
		cur = dummyNode

		while cur.next:

				if cur.next.val == val:
						cur.next = cur.next.next
				else:
						cur = cur.next
		
		return dummyNode.next
  
  
  # Time complexity: O(n)
	# Space complexity: O(1)
  
```



#### 3217. Delete Nodes From Linked List Present in Array (15/1)

`Hint: Add all elements of nums into a Set.`

```python

def modifiedList(self, nums: List[int], head: Optional[ListNode]) -> Optional[ListNode]:
		dummyNode = ListNode(next = head)
		cur = dummyNode
		nums = set(nums)

		while cur.next:

				if cur.next.val in nums:
						cur.next = cur.next.next
				else:
						cur = cur.next
		
		return dummyNode.next



# Time complexity: O(n + m) 
# n: lengh of nums, m: lengh of the linked list


```



#### 2487. Remove Nodes From Linked List (15/1)

`Hint: The essence of recursion is that it traverses the linked list in reverse.`

or

`Hint: Reverse the list`



```python

def reverseList(self, head: ListNode) -> ListNode:

		cur = head
		prev = None

		while cur:
				nxt = cur.next
				cur.next = prev
				prev = cur
				cur = nxt

		return prev


def removeNodes1(self, head: Optional[ListNode]) -> Optional[ListNode]:

		revList = self.reverseList(head)
		cur = revList
		
		while cur.next:

				if cur.next.val < cur.val:
						cur.next = cur.next.next
				else:
						cur = cur.next
		
		# reverse back
		li = self.reverseList(revList)
		
		return li

  # Time complexity: O(n)
	# Space complexity: O(1)

# The essence of recursion is that it traverses the linked list in reverse.

def removeNodes(self, head: Optional[ListNode]) -> Optional[ListNode]:
		if head.next == None:
				return head
		
		node = self.removeNodes(head.next)

		if node.val > head.val:
				return node  # remove head
		
		head.next = node
		return head
  
  # Time complexity: O(n)
	# Space complexity: O(n)
  
```



### Tree

#### 104. Maximum Depth of Binary Tree (16/1)

`Hint: bfs or recursion`



````python

def maxDepth1(self, root: Optional[TreeNode]) -> int:
		if not root: return 0

		ans = 1
		queue = deque([(ans, root)])

		while queue:
				depth, node = queue.popleft()
				if node:
						ans = max(ans, depth)
						queue.append([depth + 1, node.left])
						queue.append([depth + 1, node.right])
		
		return ans

  # Time complexity: O(n)
	# Space complexity: O(n) in the worst case (when the tree is very unbalanced and most nodes end up in the queue at the same level).
  
  

def maxDepth2(self, root: Optional[TreeNode]) -> int:

		if not root:
				return 0

		l_depth = self.maxDepth(root.left)
		r_depth = self.maxDepth(root.right)

		return 1 + max(l_depth, r_depth)
  
    
  # Time complexity: O(n)
	# Space complexity: O(n)
  
  

````



#### 111. Minimum Depth. of Binary Tree (16/1)



`Hint: bfs or recursion dfs`

`Find the leave then return`

```python

def minDepth1(self, root: Optional[TreeNode]) -> int:
		if not root: return 0

		queue = deque([(1, root)])

		while queue:
				depth, node = queue.popleft()

				if not node.left and not node.right:
						return depth
				if node.left:
						queue.append((depth + 1, node.left))
				if node.right:
						queue.append((depth + 1, node.right))
      
      
def minDepth2(self, root: Optional[TreeNode]) -> int:
		ans = inf

		def dfs(node: Optional[TreeNode], cnt: int) -> None:
				if not node:
						return
				
				nonlocal ans
				cnt += 1
				if cnt >= ans:
						return 

				if node.left is node.right:
					
						ans = min(cnt, ans)
						return
				
				dfs(node.left, cnt)
				dfs(node.right, cnt)

		dfs(root, 0)
		
		return ans if root else 0
  
  
    # Time complexity: O(n)
	# Space complexity: O(n)
  
  
```



#### 112. Path Sum (16/1)

`Hint: minus tagetSum`

````python

def hasPathSum(self, root: Optional[TreeNode], targetSum: int) -> bool:
		if not root:
				return False
		
		targetSum -= root.val

		if not root.left and not root.right:
				return targetSum == 0

		return self.hasPathSum(root.left, targetSum) or self.hasPathSum(root.right, targetSum)
  
  # Time complexity: O(n)
	# Space complexity: O(n)
  
````



#### 129. Sum Root to Leaf Numbers (16/1)

`Hint: dfs`

```python

def sumNumbers1(self, root: Optional[TreeNode]) -> int:

		ans = 0

		def dfs(node: Optional[TreeNode], currentSum: str) -> None:
				if not node:
						return
				
				currentSum += str(node.val)

				if not node.left and not node.right:
						nonlocal ans
						ans += int(currentSum)
						return
				
				dfs(node.left, currentSum)
				dfs(node.right, currentSum)
		
		dfs(root, '')

		return ans


def sumNumbers(self, root: Optional[TreeNode]) -> int:

		ans = 0

		def dfs(node: Optional[TreeNode], currentSum: int) -> None:
				if not node:
						return
				
				currentSum = currentSum * 10 + node.val

				if not node.left and not node.right:
						nonlocal ans
						ans += currentSum
						return
				
				dfs(node.left, currentSum)
				dfs(node.right, currentSum)
		
		dfs(root, 0)

		return ans
  
  
  # Time complexity: O(n)
	# Space complexity: O(n)
  
```



#### 1448. Count Good Nodes in Binary Tree (17/1)



```python

def goodNodes(self, root: TreeNode) -> int:

		ans = 0

		def dfs(node: TreeNode, pathMax: int) -> None:
				if not node:
						return
				
				if node.val >= pathMax:
						nonlocal ans
						ans += 1
						pathMax = node.val

				dfs(node.left, pathMax)
				dfs(node.right, pathMax)
		
		dfs(root, -inf)
		
		return ans

  
  # Time complexity: O(n)
	# Space complexity: O(n)

```





#### 987. Vertical Order Traversal of a Binary Tree (17/1)

`Hint: use defaultdict`



```python

def verticalTraversal(self, root: Optional[TreeNode]) -> List[List[int]]:

		d = defaultdict(list)

		def dfs(node: Optional[TreeNode], row: int, col: int) -> None:
				if not node:
						return
				
				d[col].append({
						'row': row,
						'val': node.val
				})

				dfs(node.left, row + 1, col - 1)
				dfs(node.right, row +1, col + 1)

		dfs(root,0, 0)

		sorted_dict = dict(sorted(d.items()))

		ans = []

		for x in sorted_dict:
				sorted_dict[x].sort(key=lambda x: (x['row'], x['val']))
				ans.append([item['val'] for item in sorted_dict[x]]) 
				
		return ans
  
  
def verticalTraversal2(self, root: Optional[TreeNode]) -> List[List[int]]:

		col_map = defaultdict(list)

		def dfs(node: Optional[TreeNode], row: int, col: int) -> None:
				if not node:
						return
				
				col_map[col].append((row,node.val))

				dfs(node.left, row + 1, col - 1)
				dfs(node.right, row +1, col + 1)

		dfs(root,0, 0)

		ans = []

		for col in sorted(col_map.keys()):
				col_map[col].sort(key=lambda x: (x[0], x[1]))
				ans.append([val for _, val in col_map[col]])
		return ans
  
  
  # Time complexity: O(n)(DFS)+O(n)(inserts)+O(nlogn)(sort columns)+O(nlogn)(sort rows within columns)=O(nlogn).
  
  # Space complexity: O(n)
  

```



#### 100. Same Tree (17/1)



`Hint: use recursion to test p.left, q.left, p.right, q.right`



```python

def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
		if p == None and q == None:
				return True
		
		if p == None or q == None or p.val != q.val:
				return False

		return self.isSameTree(p.left, q.left) and self.isSameTree(p.right, q.right)
  
   # Time complexity: O(min(m,n)
	# Space complexity: O(min(m,n)
  
  
  
```



#### 101. Symmetric Tree (17/1)

`Hint: check same tree`

````python

def isSymmetric(self, root: Optional[TreeNode]) -> bool:

		def isSymmeTrees(left: Optional[TreeNode], right: Optional[TreeNode]) -> bool:

				if not left and not right:
						return True
				
				if (not left or not right) or (left.val != right.val):
						return False
				
				return isSymmeTrees(left.left, right.right) and isSymmeTrees(left.right, right.left)

		
		return isSymmeTrees(root.left, root.right)
  
  # Time complexity: O(n)
	# Space complexity: O(n)
  

````





#### 110. Balanced Binary Tree (17/1)



`Hint: use a tuple to record [isBalanced, currentDepth]`



````python

def isBalanced(self, root: Optional[TreeNode]) -> bool:

		def getHeight(node: Optional[TreeNode] ) -> int:
				if not node:
						return 0

				left_height = getHeight(node.left)

				if left_height == -1:
						return -1
				
				right_height = getHeight(node.right)

				if right_height == -1 or abs(left_height - right_height) > 1:
						return -1
				
				return max(left_height, right_height) + 1
		
		return getHeight(root) != -1


def isBalanced2(self, root: Optional[TreeNode]) -> bool:

		def dfs(node: Optional[TreeNode]):
				if not node:
						return [True, 0]

				left, right = dfs(node.left), dfs(node.right)

				balanced = left[0] and right[0] and abs(left[1] - right[1]) <= 1

				return [balanced, max(left[1],right[1]) + 1]

		return dfs(root)[0]


  # Time complexity: O(n)
	# Space complexity: O(n)

````



#### 199. Binary Tree Right Side View (17/1)



`Hint: depth == Len(ans)`



```python

def rightSideView(self, root: Optional[TreeNode]) -> List[int]:
		ans = []

		def dfs(node: Optional[TreeNode], depth: int) -> None:
				if not node:
						return 
				
				if depth == len(ans):
						ans.append(node.val)

				dfs(node.right, depth + 1)
				dfs(node.left, depth + 1)

		dfs(root, 0)

		return ans
  
  # Time complexity: O(n)
	# Space complexity: O(n)
  

```





#### 226. Invert Binary Tree (17/1)

`Hint: use temp and then swap`

```python

def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
		if not root:
				return None

		
		# temp = root.left
		# root.left = root.right
		# root.right = temp

		root.left, root.right = root.right, root.left

		self.invertTree(root.left)
		self.invertTree(root.right)

		return root


  # Time complexity: O(n)
	# Space complexity: O(n)


```



#### 617. Merge Two Binary Trees (17/1)



`Hint: add sum of tree 1 and 2 to tree1`



````python

def mergeTrees(self, root1: Optional[TreeNode], root2: Optional[TreeNode]) -> Optional[TreeNode]:

		if root1 is None: return root2
		if root2 is None: return root1

		root1.val = root1.val + root2.val

		root1.left = self.mergeTrees(root1.left, root2.left)
		root1.right = self.mergeTrees(root1.right, root2.right)

		return root1

  # Time complexity: O(min(n,m))
	# Space complexity: O(min(n,m))
  
  
````





#### 1026. Maximum Difference Between Node and Ancestor (19/1)



`Hint: find the mx and mn of every path`



```python

def maxAncestorDiff(self, root: Optional[TreeNode]) -> int:

		ans = 0

		def dfs(node: Optional[TreeNode], mn: int, mx: int) -> None:
				if not node:
						return
				
				mn = min(mn, node.val)
				mx = max(mx, node.val)

				nonlocal ans
				ans = max(ans, node.val - mn, mx - node.val)

				dfs(node.left, mn, mx)
				dfs(node.right, mn, mx)
		
		dfs(root, inf, -inf)
		return ans
  
  
  def maxAncestorDiff2(self, root: Optional[TreeNode]) -> int:

		ans = 0

		def dfs(node: Optional[TreeNode], mn: int, mx: int) -> None:
				if not node:
						nonlocal ans
						ans = max(ans, mx - mn)
						return
				
				mn = min(mn, node.val)
				mx = max(mx, node.val)

				dfs(node.left, mn, mx)
				dfs(node.right, mn, mx)

		dfs(root, root.val, root.val)

		return ans
  
  
  # Time complexity: O(n)
	# Space complexity: O(n)
  
```



#### 1080. Insufficient Nodes in Root to Leaf Paths (19/1)



`Hint: make use of pre and post dfs`



```python

def sufficientSubset(self, root: Optional[TreeNode], limit: int) -> Optional[TreeNode]:

		def dfs(node: Optional[TreeNode], current_sum: int) -> None:
				if not node:
						return None

				current_sum += node.val

				# leaf, check if it's sufficient
				if not node.left and not node.right:
						return None if current_sum < limit else node
				
				node.left = dfs(node.left, current_sum)
				node.right = dfs(node.right, current_sum)

				# if the node has no children after pruned, then it's effectively pruned
				if not node.left and not node.right:
						return None
				
				return node

		return dfs(root, 0)
  
  
  
  def sufficientSubset2(self, root: Optional[TreeNode], limit: int) -> Optional[TreeNode]:

		limit -= root.val

		if root.left == root.right:
				return None if limit > 0 else root

		if root.left: root.left = self.sufficientSubset(root.left, limit)
		if root.right: root.right = self.sufficientSubset(root.right, limit)

		return root if root.left or root.right else None
  
  
  # Time complexity: O(n)
  # Space complexity: O(n)


```



#### 98. Validate Binary Search Tree (20/1)



`Hint: use min and max to define the boundary`



```python


# pre order
def isValidBST(self, root: Optional[TreeNode]) -> bool:
		
		def dfs(node:Optional[TreeNode], mn: int, mx: int) -> bool:
				if not node:
						return True
				
				if node.val <= mn or node.val >= mx:
						return False

				return dfs(node.left,mn, node.val) and dfs(node.right, node.val, mx)

		
		return dfs(root, -inf, inf)
  

# In order
class Solution:
  pre = -inf
  def isValidBST(self, root: Optional[TreeNode]) -> bool:

      if not root:
          return True

      if not self.isValidBST(root.left):
          return False

      if root.val <= self.pre:
          return False

      self.pre = root.val

      if not self.isValidBST(root.right):
          return False

      return True
  
  
  # post order
  def isValidBST(self, root: Optional[TreeNode]) -> bool:

		def dfs(node: Optional[TreeNode]) -> tuple:
				
				if not node:
						return inf, -inf

				min_left, max_left = dfs(node.left)
				min_right, max_right = dfs(node.right)

				x = node.val

				if x <= max_left or x >= min_right:
						return -inf, inf
				
				return min(min_left, x), max(max_right, x)

		return dfs(root)[1] != inf
  
  
  # Time complexity: O(n)
  # Space complexity: O(n)
 

```





#### 938. Range Sum of BST (10/1)



`Hint: greater than high goes to left, smaller than low goes to right`



```python

def rangeSumBST(self, root: Optional[TreeNode], low: int, high: int) -> int:
		if root is None:
				return 0

		if root.val > high:
				return self.rangeSumBST(root.left, low, high)
		
		if root.val < low:
				return self.rangeSumBST(root.right, low, high)

		return root.val + self.rangeSumBST(root.left, low, high) + self.rangeSumBST(root.right, low, high)
  
  # Time complexity: O(n)
  # Space complexity: O(n)
  
```



#### 2476. Closest Nodes Queries in a Binary Search Tree (20/1)



`Hint: dfs and then bisect_left`



```python

def closestNodes(self, root: Optional[TreeNode], queries: List[int]) -> List[List[int]]:

		sorted_vals = []
		def dfs(node: Optional[TreeNode]) -> None:
				if not node:
						return

				dfs(node.left)
				sorted_vals.append(node.val)
				dfs(node.right)

		dfs(root)
		n = len(sorted_vals)
		ans =[]

		for value in queries:
				right_idx = bisect_left(sorted_vals, value)
				right_val = sorted_vals[right_idx] if 0 <= right_idx < n else -1

				left_idx = right_idx

				if left_idx == n or sorted_vals[left_idx] != value:
						left_idx -= 1
				
				left_val = sorted_vals[left_idx] if 0 <= left_idx < n else -1

				ans.append([left_val, right_val])
		
		return ans
  
  # Time complexity: O(n + qlog(n))
  # n nodes, and q: len(queries)
  # Space complexity: O(n)
  

```



#### 230. Kth Smallest Element in a BST (20/1)



`Hint: return left eariler once find the k`



```python

def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:

		def dfs(node: Optional[TreeNode]) -> int:

				nonlocal k
				if node == None:
						return None
				
				left_result = dfs(node.left)

				if left_result != None:
						return left_result

				k -= 1

				if k == 0:
						return node.val
				
				return dfs(node.right)
		
		return dfs(root)

  # Time complexity: O(n)
  # Space complexity: O(h)
  # h: tree height
  

```





#### 1373. Maximum Sum BST in Binary Tree (21/1)



`Hint: reference validate bst and use from bottom to top`



```python

def maxSumBST(self, root: Optional[TreeNode]) -> int:
		ans = 0

		def dfs(node: Optional[TreeNode]) -> tuple:
				if node is None:
						return inf, -inf, 0
				
				left_min, left_max, left_sum = dfs(node.left)
				right_min, right_max, right_sum = dfs(node.right)

				x = node.val

				if x <= left_max or x >= right_min:
						return -inf, inf, 0

				s = left_sum + right_sum + x

				nonlocal ans
				ans = max(s, ans)

				return min(left_min, x), max(right_max, x), s
		
		dfs(root)
		return ans
  
  # Time complexity: O(n)
  # Space complexity: O(n)
  
  

```





#### 105*. Construct Binary Tree from Preorder and Inorder Traversal (21/1)



`Hint: root is preorder[0], find root.val in inorder`



```python


    def buildTree(self, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:
        
	      index = {x: i for i, x in enumerate(inorder)}
        # index = {}
        # for i, x in enumerate(inorder):
        #    index[x] = i

        if not preorder or not inorder:
            return None
        
        root = TreeNode(preorder[0])
        mid = index[preorder[0]]

        root.left = self.buildTree(preorder[1:mid+1], inorder[:mid])
        root.right = self.buildTree(preorder[mid+1:],inorder[mid+1:])

        return root
      
      
  # Time complexity: O(n^2)
  # Space complexity: O(n^2)
  
      
```





#### 106*. Construct Binary Tree from Inorder and Postorder Traversal (21/1)

`Hint: find the root element index in inorder array and use recursion`

```python

def buildTree(self, inorder: List[int], postorder: List[int]) -> Optional[TreeNode]:
		if not inorder or not postorder:
				return None

		index = {x: i for i, x in enumerate(inorder)}
				
		n = len(postorder)
		
		root = TreeNode(postorder[n - 1])
		mid = index[postorder[n - 1]]
		
		root.left = self.buildTree(inorder[:mid], postorder[:mid])
		root.right = self.buildTree(inorder[mid+1:], postorder[mid:n-1])

		return root
  
  # Time complexity: O(n^2)
  # Space complexity: O(n^2)
  
```





#### 889*. Construct Binary Tree from Preorder and Postorder Traversal (22/1)

`Hint: always assume left_root = index[preorder[1]]`

```python

def constructFromPrePost(self, preorder: List[int], postorder: List[int]) -> Optional[TreeNode]:

		if not preorder or not postorder:
				return None

		index = {x: i for i, x in enumerate(postorder)}

		root = TreeNode(preorder[0])

		if len(preorder) == 1:
				return root

		left_root = index[preorder[1]]

		root.left = self.constructFromPrePost(preorder[1:left_root + 2],
		                                      postorder[:left_root + 1])
		root.right = self.constructFromPrePost(preorder[left_root + 2:],
		                                       postorder[left_root + 1:-1])

		return root
  
  
  # Time complexity: O(n^2)
  # Space complexity: O(n^2)
  
  
```



#### 1110. Delete Nodes And Return Forest (22/1)



`Hint: use postorder and only need to append the root of each forster`



```python

    def delNodes(self, root: Optional[TreeNode], to_delete: List[int]) -> List[TreeNode]:
        ans = []

        s = set(to_delete)

        def dfs(node: Optional[TreeNode]) -> List[TreeNode]:
            if not node:
                return None
            
            node.left = dfs(node.left)
            node.right = dfs(node.right)

            if node.val not in s: return node
            if node.left: ans.append(node.left)
            if node.right: ans.append(node.right)
            return None

        if dfs(root): ans.append(root)
        return ans
      
      
      
      # Overall time complexity: O(n + m) n for traversing the tree, m for building the dictionary (or set).
      # Overall space complexity: O(n + m)
      
```





#### 236. Lowest Common Ancestor of a Binary Tree (22/1)



`Hint: dfs postorder`



```python

def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
		if not root:
				return None
		
		if root is p or root is q:
				return root
		
		l = self.lowestCommonAncestor(root.left, p, q)
		r = self.lowestCommonAncestor(root.right, p, q)

		if l and r:
				return root
		
		return l or r

    
  # Time complexity: O(n)
  # Space complexity: O(n)
  
  
```



#### 235. Lowest Common Ancestor of a Binary Tree (22/1)



`Hint: if both of them greater or samller than root.val?`

```python

    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        #if not root:
         #  return None
        
        val = root.val
        if p.val < val and q.val < val:
            return self.lowestCommonAncestor(root.left, p, q)
        
        if p.val > val and q.val > val:
            return self.lowestCommonAncestor(root.right, p, q)

        return root

  # Time complexity: O(n)
  # Space complexity: O(n)

```



 

#### 1123. Lowest Common Ancestor of Deepest Leaves (23/1)



```python

def lcaDeepestLeaves(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
		ans = None
		max_depth = -1

		def dfs(node: Optional[TreeNode], depth: int) -> int:
				if not node:
						return -1

				nonlocal ans, max_depth
				if not node.left and not node.right:
						if depth > max_depth:
								max_depth = depth
								ans = node                
						return depth
						
				l = dfs(node.left, depth + 1)
				r = dfs(node.right, depth + 1)

				if l == r == max_depth:
						ans = node
				
				return max(l, r)

		dfs(root, 0)
		return ans
  
  # Time complexity: O(n)
  # Space complexity: O(n)
  
```



#### 102. Binary Tree Level Order Traversal (23/1)



```python

def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:

		if not root: return []

		ans = []
		queue = []
		queue = deque([(0, root)])
		dic = defaultdict(list)

		while len(queue):
				depth, node = queue.popleft()
				dic[depth].append(node.val)

				if node.left:
						queue.append([depth + 1, node.left])
				if node.right:
						queue.append([depth + 1, node.right])

		for value in dic:
				ans.append(dic[value])
		
		return ans


def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
		if not root: return []

		ans = []
		q = deque([root])

		while q:

				vals = []

				for _ in range(len(q)):
						node = q.popleft()
						vals.append(node.val)
						if node.left: q.append(node.left)
						if node.right: q.append(node.right)
				
				ans.append(vals)

		return ans
  
    
  # Time complexity: O(n)
  # Space complexity: O(n)
  
```





#### 103. Binary Treee Zigzag Level Order Traversal (23/1)



```python

def zigzagLevelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:

		if not root: return []
		ans = []
		q = deque([root])

		while q:
				vals = []
				for _ in range(len(q)):
						node = q.popleft() 
						vals.append(node.val)
						if node.left: q.append(node.left)
						if node.right: q.append(node.right)
				
				if len(ans) % 2 != 0:
						vals.reverse()
						
				ans.append(vals)

		return ans
  
  
  # Time complexity: O(n)
  # Space complexity: O(n)
  
  
```





#### 513. Find Bottom Left Tree Value (23/1)



```python

def findBottomLeftValue(self, root: Optional[TreeNode]) -> int:

		ans = None
		q = deque([root])

		while q:
				node = q.popleft()
				ans = node.val
				if node.right: q.append(node.right)
				if node.left: q.append(node.left)

		return ans
  
  # Time complexity: O(n)
  # Space complexity: O(n)
  
```



#### 107. Binary Tree Level Order Traversal II (24/1)



```python

def levelOrderBottom(self, root: Optional[TreeNode]) -> List[List[int]]:

		if not root: return []
		ans = []
		q = deque([root])

		while q:
				vals = []
				for _ in range(len(q)):
						node = q.popleft()
						vals.append(node.val)
						if node.left: q.append(node.left)
						if node.right: q.append(node.right)

				ans.append(vals)
		
		ans.reverse()
		return ans
  
   # Time complexity: O(n)
  # Space complexity: O(n)
  

```























