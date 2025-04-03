### Backtracking 



#### 17. Letter Combinations of a Phone Number (28/1)



`Hint: recursion in the loop`



```python

MAPPING = ['','','abc','def','ghi','jkl','mno','pqrs','tuv','wxyz']
class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        n = len(digits)

        if n == 0:
            return []

        ans = []
        path = [''] * n

        def backtrack(i: int):
            if i == n:
                ans.append(''.join(path))
                return 
            
            for c in MAPPING[int(digits[i])]:
                path[i] = c
                backtrack(i + 1)
        
        backtrack(0)
        return ans
      
 # Time complexity: O(n*4^n)
 # Space complexity: O(n) 
  
```



#### 78. Subset (28/1)

`Hint: Subset either includes or not includes nums[i]`

```python

def subsets(self, nums: List[int]) -> List[List[int]]:
		ans = []
		subset = []

		def backtrack(i: int):

				if i >= len(nums):
						ans.append(subset.copy())
						return

				# decision to include nums[i]
				subset.append(nums[i])
				backtrack(i + 1)

				# decision NOT to include nums[i]
				subset.pop()
				backtrack(i + 1)

		backtrack(0)
		return ans
  
  
  
  def subsets(self, nums: List[int]) -> List[List[int]]:

		ans = []
		subset = []
		n = len(nums)

		def backtrack(i: int):

				ans.append(subset.copy())

				for j in range(i, n):
						subset.append(nums[j])
						backtrack(j + 1)
						subset.pop()
		
		backtrack(0)
		return ans

 # Time complexity: O(n*2^n)
 # Space complexity: O(n) 
  
```



#### 131. Palindrome Partitioning (30/1)



`Hint: use the parten above`



```python

class Solution:
    def partition(self, s: str) -> List[List[str]]:

        ans = []
        part = []
        n = len(s)

        def dfs(i: int):
            if i >= n:
                ans.append(part.copy())
                return
            
            for j in range(i, n):
                if self.isPalin(s, i, j):
                    part.append(s[i:j+1])
                    dfs(j + 1)
                    part.pop()
            
        dfs(0)
        return ans
        
    def isPalin(self, s: str, left:int, right:int):
        while left < right:
            if s[left] != s[right]:
                return False
            else:
                left, right = left + 1, right - 1
        return True
      
      
    # Time complexity: O(n * 2^n)
    # Space complexity: O(n)

```



#### 2698*. Find the Punishment Number of an Integer (30/1)





#### 77. Combination (30/1)

`Hint: Pick k number from [1,..,n]`

```python

def combine(self, n: int, k: int) -> List[List[int]]:
		ans = []
		comb = []

		def dfs(i: int):

				d = k - len(comb)

				if i < d:
						return

				if (len(comb) == k):
						ans.append(comb.copy())
						return

				for j in range(i, 0, -1):
						comb.append(j)
						dfs(j - 1)
						comb.pop()

		dfs(n)
		return ans
  
  
  # Time complexity: O(k * comb(n,k))
  # Space complexity: O(k)
  
```





#### 216. Combination Sum III (7/2)



```python

def combinationSum3(self, k: int, n: int) -> List[List[int]]:
		comb = []
		ans = []

		def backtrack(i: int, t: int) -> None:

				d = k - len(comb)

				if i < d:
						return
				
				if t < 0 or t > (i * 2 - d + 1) * d // 2:
						return 

				if len(comb) == k:
						ans.append(comb.copy())
						return 

				for j in range(i, 0, -1):
						comb.append(j)
						backtrack(j - 1, t - j)
						comb.pop()

		backtrack(9,n)
		return ans
  
  
  # Time complexity: O(k * comb(9,k))
  # Space complexity: O(k)
  
  
```



#### 22. Generate Parentheses (7/2)



```python

def generateParenthesis(self, n: int) -> List[str]:
		
		# openN == closeN == n, add to ans

		# openN < n, add '('

		# closeN < openN, add ')'

		ans = []
		stack = []

		def backtrack(openN: int, closeN: int) -> None:
				if openN == closeN == n:
						ans.append(''.join(stack))
						return
				
				if openN < n:
						stack.append('(')
						backtrack(openN + 1, closeN)
						stack.pop()

				if closeN < openN:
						stack.append(')')
						backtrack(openN, closeN + 1)
						stack.pop()

		backtrack(0,0)
		return ans
  
  
  # Time complexity: O(n* C(2n, n)), due to the limitation of the rule, it's O(Cn * n) (Catalan number)
  
  # Space complexity: O(n)
  
  
  
```



#### 39. Combination Sum (9/2)



```python

def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:

		ans = []
		comb = []
		candidates.sort()

		def backtrack(i: int, t: int) -> None:

				if t == 0:
						ans.append(comb.copy())
						return
				
				if candidates[i] > t: 
						return

				for j in range(i, len(candidates)):
						comb.append(candidates[j])
						backtrack(j, t - candidates[j])
						comb.pop()

		backtrack(0,target)
		return ans
  
  

```



#### 46. Permutation (9/2)



```python


def permute(self, nums: List[int]) -> List[List[int]]:

		n = len(nums)
		path = [0] * n
		on_path = [False] * n
		ans = []

		def dfs(i:int) -> None:
				if i == n:
						ans.append(path.copy())
						return
				
				for j in range(n):
						if not on_path[j]:
								path[i] = nums[j]
								on_path[j] = True
								dfs(i+1)
								on_path[j] = False
		dfs(0)
		return ans
  
  
  # Time complexity: O(n!)
  # Space complexity: O(n)
  
  
```





#### 51 N-Queens (9/2)



```python


def solveNQueens(self, n: int) -> List[List[str]]:
		col = set()
		posDiag = set() # r + c
		negDiag = set() # r - c
		ans = []

		board = [["."] * n for col in range(n)]

		def backtrack(r: int) -> None:
				if r == n:
						copy = ["".join(row) for row in board]
						ans.append(copy)
						return

				
				for c in range(n):
						if c in col or r + c in posDiag or r - c in negDiag:
								continue

						col.add(c)
						posDiag.add(r + c)
						negDiag.add(r - c)
						board[r][c] = 'Q'
						backtrack(r + 1)
						col.remove(c)
						posDiag.remove(r + c)
						negDiag.remove(r - c)
						board[r][c] = '.'

		backtrack(0)
		return ans
  
  
  # Time complexity: O(n!)
  # Space complexity: O(n^2) - borad O(n^2), recursion stack O(n)
  
```



#### 52. N-Queens II (9/2)



```python

def totalNQueens(self, n: int) -> int:

		col = set()
		posDiag = set() # r + c
		negDiag = set() # r - c
		ans = 0

		def backtrack(r: int) -> None:
				if r == n:
						nonlocal ans
						ans += 1
						return
				
				for c in range(n):
						if c in col or r + c in posDiag or r - c in negDiag:
								continue
						
						posDiag.add(r + c)
						negDiag.add(r - c)
						col.add(c)
						backtrack(r + 1)
						posDiag.remove(r + c)
						negDiag.remove(r - c)
						col.remove(c)

		backtrack(0)

		return ans
  
  # Time complexity: O(n!)
  # Space complexity: O(n)
  
```





#### 2850. Minimum Moves to Spread Stones Over Grid (10/2)



`Hint: count the number of 0 and number greater than 1`



```python

def minimumMoves(self, grid: List[List[int]]) -> int:
		from_ = []
		to = []

		for i, row in enumerate(grid):
				for j, count in enumerate(row):
						if count > 1:
								from_.extend([(i,j)] * (count - 1))
						elif count == 0:
								to.append((i,j))

				
		ans = inf
		for from2 in permutations(from_):
				total = 0
				for (x1,y1), (x2,y2) in zip(from2, to):
						total += abs(x1 - x2) + abs(y1-y2)
				
				ans = min(ans, total)

		return ans
		
    
    # Time complexity: O(mn * (mn)!) m = 3, n = 3
    # Space complexity: O(mn)

```



### Dynamic Programming 



#### 198. House Robber (12/2)

`Hint: up to this point, what's the maximum I can get`

```python

def rob(self, nums: List[int]) -> int:
	rob1, rob2 = 0, 0

	# [rob1, rob2, n, n+1, n+2, ...]
	for n in nums:
		temp = max(rob1 + n, rob2)
		rob1 = rob2
		rob2 = temp
	
	return rob2



	# Time complexity: O(n) 
  # Space complexity: O(1)

```



#### 70. Climbing Stairs (12/2)

`Hint: Fibonacci`

```python

from functools import cache


def climbStairs(self, n: int) -> int:
		@cache
		def fib(n: int) -> int:
				if n <= 1:
						return 1
				return fib(n - 1) + fib(n - 2)
		return fib(n)


 	# Time complexity: O(n) 
  # Space complexity: O(n)
  

def climbStairs(self, n: int) -> int:
		f0 = f1 = 1

		for i in range(2, n + 1):
				temp = f0 + f1
				f0 = f1
				f1 = temp
		
		return f1
  
 	# Time complexity: O(n) 
  # Space complexity: O(1)
  
```



#### 746. Min Cost Climbing Stairs (12/2)



```python

def minCostClimbingStairs(self, cost: List[int]) -> int:
		cost.append(0)

		for i in range(len(cost) - 3, -1, -1):
				cost[i] +=  min(cost[i+1], cost[i+2])
		
		return min(cost[0], cost[1])
  
  
  def minCostClimbingStairs2(self, cost: List[int]) -> int:

		prev2 = prev1 = 0
		n = len(cost)

		for i in range(2, n + 1):
				temp = min(prev1 + cost[i-1], prev2 + cost[i - 2])
				prev2 = prev1 
				prev1 = temp

		return prev1
  
  # Time complexity: O(n) 
  # Space complexity: O(1)

```



#### 377. Combination Sum IV (14/2)



```python

def combinationSum4(self, nums: List[int], target: int) -> int:

		@cache
		def dfs(i: int) -> int:
				if i == 0:
						return 1
				return sum(dfs(i - x) for x in nums if x <= i)

		return dfs(target)

  

def combinationSum4(self, nums: List[int], target: int) -> int:
		dp = {0:1}

		for total in range(1, target+1):
				dp[total] = 0
				for n in nums:
						dp[total] += dp.get(total - n, 0)

		return dp[total]
  
  
  # Time complexity: O(target * n) 
  # Space complexity: O(n)

  
```



#### 2466. Count Ways To Build Good Strings (14/2)



```python

def countGoodStrings(self, low: int, high: int, zero: int, one: int) -> int:
		MOD = 10 ** 9 + 7

		@cache
		def dfs(i: int) -> int:
				if i < 0:
						return 0

				if i == 0:
						return 1

				return (dfs(i - zero) + dfs(i - one)) % MOD

		
		return sum(dfs(i) for i in range(low, high + 1)) % MOD


def countGoodStrings(self, low: int, high: int, zero: int, one: int) -> int:
		MOD = 10 ** 9 + 7

		dp = {0:1}

		for i in range(1, high + 1):
				dp[i] = (dp.get(i - one, 0) + dp.get(i - zero, 0)) % MOD
		
		return sum([dp[i] for i in range(low, high + 1)]) % MOD
  
  
  # Time complexity: O(high) 
  # Space complexity: O(high)
        
```



#### 213. House Robber II (16/2)



```python

def rob(self, nums: List[int]) -> int:

		if len(nums) == 1: return nums[0]

		ans1 = ans2  = 0

		def helper(arr): 
				rob1 = rob2 = 0
				# [rob1, rob2, n, n + 1, n +2 ...]
				for n in arr:
						temp = max(rob1 + n, rob2)
						rob1 = rob2
						rob2 = temp
				return rob2

		ans1 = helper(nums[:-1])
		ans2 = helper(nums[1:])

		return max(ans1, ans2)
  
  
  # Time complexity: O(n) 
  # Space complexity: O(1)
  
```







#### 64. Minimum Path Sum (16/2)



```python

def minPathSum(self, grid: List[List[int]]) -> int:
		ROWS, COLS = len(grid), len(grid[0])

		# [[inf, inf, inf, inf],[inf, inf, inf, inf]] ,,,
		ans = [[float("inf")] * (COLS + 1) for r in range(ROWS + 1)]
		ans[ROWS][COLS - 1] = 0

		for row in range(ROWS -1, -1, -1):
				for col in range(COLS -1, -1, -1):
						ans[row][col] = min(ans[row + 1][col], ans[row][col + 1]) + grid[row][col]

		return ans[0][0]
  
  
  
# from top to bottom
def minPathSum(self, grid: List[List[int]]) -> int:

		@cache
		def dfs(r: int, c: int):
				if r == 0 and c == 0:
						return grid[r][c]
				
				if r < 0 or c < 0:
						return inf
				
				return min(dfs(r - 1, c), dfs(r, c - 1)) + grid[r][c]

		return dfs(len(grid) - 1, len(grid[0]) - 1)
  
  
  # Time complexity: O(r * c)
  # Space complexity: O(r * c)
  
  
  
  def minPathSum(self, grid: List[List[int]]) -> int:
    ROWS, COLS = len(grid), len(grid[0])

    dp = [float("inf")] * (COLS + 1)
    dp[COLS - 1] = 0

    for row in range(ROWS - 1, -1, -1):
        for col in range(COLS - 1, -1, -1):
            dp[col] = min(dp[col + 1], dp[col]) + grid[row][col]

    return dp[0]
  
  
  # Time complexity: O(r * c)
  # Space complexity: O(c)
  
```





# HackerRank

### Week 1



#### Plus Minus (17/2)

```python


def plusMinus(arr):
    n = len(arr)
    
    pos = sum(1 for num in arr if num > 0)
    neg = sum(1 for num in arr if num < 0)
    zero = n - pos - neg
    
    print(pos/n)
    print(neg/n)
    print(zero/n)


    
  # Time complexity: O(n)
  # Spece complexity: O(1)



```



#### Mini-Max Sum (17/2)



```python

def miniMaxSum(arr):
    arr.sort()
    
    max = sum(arr[i] for i in range(len(arr)) if i > 0)
    min = sum(arr[i] for i in range(len(arr)) if i < len(arr) - 1)
    
    print(min, max)
    
  # Time complexity: O(nlog(n)) sorting
  # Spece complexity: O(1)
  
    
  # better approach
def miniMaxSum2(arr):
    total = sum(arr)

    min_sum = total - max(arr)    
    max_sum = total - min(arr)
    
    print(min_sum, max_sum)
    
 	# Time complexity: O(n)
  # Spece complexity: O(1)
    
    
```



#### Time Conversion (17/2)

```python

def timeConversion(s):
    # Get AM or PM
    time_format = s[-2:] 
    hours = s[:2]
    rest = s[2:-2]
    
    # AM
    if time_format == "AM":
        # 12:01:00 AM
        if hours == "12":
            return "00" + rest
        # 07:01:00 AM
        else:
            return hours + rest
    # PM
    else:
        # 12:01:00 PM
        if hours == "12":
            return hours + rest
        # 07:05:00 PM
        else:
            new_hours = str(int(hours) + 12)
            return new_hours + rest
        
        
  # Time complexity: O(1)
  # Spece complexity: O(1)
        
        
```





#### Breaking the Records (17/2)



```python

def breakingRecords(scores):
    min_score = max_score = scores[0]
    min_count = max_count = 0
    
    for score in scores[1:]:
        
        if score > max_score:
            max_count += 1
            max_score = score
        
        elif score < min_score:
            min_count += 1
            min_score = score
        
    return [max_count, min_count]  
  
  # Time complexity: O(n)
  # Spece complexity: O(1)
  
```





#### *Divisible Sum Pairs (18/2)

```python

def divisibleSumPairs(n, k, ar):
    remainder_map ={}
    ans = 0
    
    for num in ar:
        remainder = num % k
        complement = (k - remainder) % k
        
        if complement in remainder_map:
            ans += remainder_map[complement]
        
        remainder_map[remainder] = remainder_map.get(remainder, 0) + 1
        
    return ans
  
  # Time complexity: O(n)
  # Spece complexity: O(k) (store at most k keys)
  

```



#### Sparse Arrays (18/2)



```python

def matchingStrings(strings, queries):
    fre_map = {}
    ans = []
    
    for ele in strings:
        fre_map[ele] = fre_map.get(ele, 0) + 1
    
    for ele in queries:
        ans.append(fre_map.get(ele, 0))    
        
    return ans
  
   # Time complexity: O(n + m)
  # Spece complexity: O(n + m)
  
```





### Week 2



#### Lonely Integer (20/2)



```python

def lonelyinteger(a):
    
    count_map = {}
    
    for num in a:
        count_map[num] = count_map.get(num, 0) + 1
        
    
    for k, v in count_map.items():
        if v == 1:
            return k
          
          
def lonelyinteger2(a):
    return 2 * sum(set(a)) - sum(a)
          
   # Time complexity: O(n)
   # Space complexity: O(n)
    
```



#### Grading students (20/2)



```python

def gradingStudents(grades):
    ans = []
    for g in grades:
        if g < 38:
            ans.append(g)
            continue
        
        remainder = g % 5
        if remainder >= 3:
            compliment = (5 - remainder) % 5
            new_grade = g + compliment
            ans.append(new_grade)
        else:
            ans.append(g)
            
    return ans
  
   # Time complexity: O(n)
   # Space complexity: O(n)
  
```





#### *Flipping bits (20/2)

```python

def flippingBits(n):
    return (2 ** 32 - 1) - n

    # Time complexity: O(1)
   # Space complexity: O(1) 
  
```



#### Diagonal Difference (20/2)

```python

def diagonalDifference(arr):
    row_len = len(arr)
    
    left_diag = right_diag = 0
    
    for i in range(row_len):
        # 0,0  1,1 2,2
        left_diag += arr[i][i]
        # 0,2 1,1 2,0
        right_diag += arr[i][row_len - 1 - i]
        
    return abs(left_diag - right_diag)
  
  
    # Time complexity: O(n)
   # Space complexity: O(1) 
  
```



#### Counting sort 1 (24/2)



```python

def countingSort(arr):
    ans = [0] * 100
    
    for num in arr:
        ans[num] += 1
    
    return ans
    
    
# Complete version
def countingSort(arr):
    # Initialize frequency array for numbers 0 to 99
    count = [0] * 100
    
    # Count the occurrences of each number in arr
    for num in arr:
        count[num] += 1
    
    # Reconstruct the sorted array from the frequency counts
    sorted_arr = []
    for i in range(len(count)):
        sorted_arr.extend([i] * count[i])
    
    return sorted_arr

  # Time complexity: O(n + k) k = 100
  # Space complexity: O(n + k) k = 100
  
  
```



#### Counting Valleys (24/2)



```python

def countingValleys(steps, path):
    
    ans = 0
    level = 0
    for ele in path:
        
        if ele == "U":
            level += 1
        elif ele == "D":
            level -= 1
    
        if level == 0 and ele == "U":
            ans += 1
    
    return ans
  

   # Time complexity: O(n)
   # Space complexity: O(1) 
  
```



#### *Pangrams (24/2)



```python

def pangrams(s):
    alphabet = [0] * 26
    
    for char in s:
        if not char.isalpha():
            continue
            
        pos = ord(char.lower()) - 97
        alphabet[pos] += 1
    
    return "pangram" if min(alphabet) >= 1 else "not pangram"
  
   # Time complexity: O(n)
   # Space complexity: O(1)
  
```



#### *Mars Exploration (24/2)



```python

def marsExploration(s):
    
    times = len(s) // 3
    correct_s = "SOS" * times
    ans = 0
    
    for i in range(len(s)):
        if correct_s[i] != s[i]:
            ans += 1
    
    return ans
  
   # Time complexity: O(n)
   # Space complexity: O(n)
  
  
def marsExploration2(s):
    ans = 0
    
    for i in range(0, len(s), 3):
        if s[i] != "S": 
            ans += 1
        if s[i+1] != "O": 
            ans += 1
        if s[i+2] != "S": 
            ans += 1
        
    return ans
  
    # Time complexity: O(n)
   # Space complexity: O(1)
  
```



### Week 3

#### Permuting Two Arrays (7/3)

```python

def twoArrays(k, A, B):
    if len(A) != len(B): 
        return 'NO'

    A.sort()
    # o(nlogn)
    B.sort()
    # O(n)
    B.reverse()
    
    for i in range(len(A)):
        if A[i] + B[i] < k:
            return 'NO'
    
    return 'YES'
  
   # Time complexity: O(nlogn) (sorting)
   # Space complexity: O(1)
  
```



#### Birthday (7/3)

```python

def birthday(s, d, m):
    
    window_size = 0
    windown_sum = 0
    window_start = 0
    ans = 0
    
    for i in range(len(s)):
        window_size += 1
        windown_sum += s[i]
        
        if window_size == m:
            if windown_sum == d:
                ans += 1
            
            windown_sum -= s[window_start]
            window_start += 1
            window_size -= 1
        
    return ans
  
   # Time complexity: O(n) 
   # Space complexity: O(1)
  
```



#### *Sales by Match (7/3)

```python

def sockMerchant(n, ar):
    
    count_map = {}
    ans = 0
    
    for ele in ar:
        count_map[ele] = count_map.get(ele, 0) + 1
        
    for key, value in count_map.items():
        ans += value // 2
    
    return ans
  
   # Time complexity: O(n) 
   # Space complexity: O(n)
  
  def sockMerchant2(n, ar):
    # 10 10 10 10 20 20 20 30 50 
    
    ar.sort()
    ans = 0
    i = 0
    
    while i + 1 < n:
        if ar[i] == ar[i + 1]:
            ans += 1
            i += 1
        i += 1
        
    return ans
  
    
   # Time complexity: O(nlogn) 
   # Space complexity: O(1)
  
```



#### *Migratory Birds (8/3)

```python

def migratoryBirds(arr):
    counter = [0] * 6
    ans = 0
    
    for ele in arr:
        counter[ele] += 1
        
    type_max = counter[1]
    for i in range(1, len(counter)):
        if counter[i] > type_max:
            type_max = counter[i]
            ans = i
    
    return ans
  
  
   # Time complexity: O(n) 
   # Space complexity: O(1)

```



#### *Maximum Perimeter Triangle (8/3)

```python

def maximumPerimeterTriangle(sticks):
    sticks.sort()
    window_start = 0
    window_sum = 0
    n = len(sticks)
    max_tri = -1
    ans = []

    for windown_end in range(n):
        window_sum += sticks[windown_end]
        if (windown_end - window_start + 1 == 2):
            current_window = windown_end + 1
            while current_window < n :
                trangle_sum = window_sum + sticks[current_window]
                if window_sum <= sticks[current_window] or trangle_sum < max_tri:
                    break
                max_tri = trangle_sum
                ans = [sticks[window_start],sticks[windown_end], sticks[current_window]]
                current_window += 1
            
            window_sum -= sticks[window_start]
            window_start += 1
        
    return ans if max_tri != -1 else [-1]
  
  
  # Time complexity: O(n^2)
  # Space complexity: O(1)
  
  
  # Better solution
  
  def maximumPerimeterTriangle(sticks):
    sticks.sort()
    sticks.reverse()
    
    
    for i in range(len(sticks) - 2):
        side1 = sticks[i]
        side2 = sticks[i+1]
        side3 = sticks[i+2]
        
        if side3 + side2 > side1:
            return [side3, side2, side1]
            
    return [-1]
  
  
  # Time complexity: O(n)
  # Space complexity: O(1)
  
```





#### *Drawing Book (8/3)



```python

def pageCount(n, p):
    
    page_from_front = math.floor(p/2)
    page_from_end = math.ceil((n-p)/2) if n % 2 == 0 else math.floor((n-p)/2)
    
    return min(page_from_front, page_from_end)
  
  
  # Time complexity: O(1)
  # Space complexity: O(1)
  
```



### Week 4



#### *Picking Numbers (10/3)



```python

def pickingNumbers(a):
    window_start = 0
    ans = 0
    a.sort()
    
    for window_end in range(1, len(a)):
        if a[window_end] - a[window_start] <= 1:
            ans = max(ans, window_end - window_start + 1)
        # it's not looping the array again, thus not O(n^2)
        while a[window_end] - a[window_start] > 1:
            window_start += 1
            
    return ans
  
 	# Time complexity: O(nlogn)
  # Space complexity: O(1)
  


def pickingNumbers2(a):
    freq = [0] * 101
    
    for num in a:
        freq[num] += 1
        
    return max(freq[i] + freq[i+1] for i in range(100))
  
    
  # Time complexity: O(n)
  # Space complexity: O(1) (range is small (101))
  
```



#### Left Rotation (10/3)

```python

def rotateLeft(d, arr):
    # d = d % len(arr) (1 <= d <= n)
    return arr[d:] + arr[0:d]
  
  # Time complexity: O(n)
  # Space complexity: O(n)
  
  
  # Slicing:
	# arr[d:] takes O(n - d)
	# arr[0:d] takes O(d)
	# Together, they cover O(n) time.
	# Concatenation: Combining the two slices is O(n).
  
  # The slicing operations create new lists, and the final concatenated list is of size n. Therefore, the space complexity is O(n).
  
```





#### Number Line Jumps (10/3)



```python

def kangaroo(x1, v1, x2, v2):
    # Write your code here
    # x1 + zv1 = x2 + zv2
    # z(v1 - v2) = x2 - x1
    # z = (x2 - x1) / (v1 - v2)
    
    if v1 == v2:
        if x2 == x1:
            return 'YES'
        return 'NO'

    z = (x2 - x1) / (v1 - v2)
    
    if z.is_integer() and z > 0:
        return 'YES'
    return 'NO'
  
  
  # Time complexity: O(1)
  # Space complexity: O(1)
  
```





#### **Separate the Numbers (10/3)



```python

def separateNumbers(s):
    substring = ""
    for digit in range(len(s) // 2):
        substring += s[digit]
        num = int(substring)
        target_string = substring
        
        while len(target_string) < len(s):
            num = num + 1
            target_string += str(num)
            
        if target_string == s:
            print("YES " + substring)
            return
            
    print("NO")
    
    
    
  
  # Time complexity: O(n^2)
  # Space complexity: O(n) (largest string)
    
    
    
```



#### Closest Numbers (14/3)



```python

def closestNumbers(arr):
    arr.sort()
    mini_diff = arr[1] - arr[0]
    ans = []
    
    for i in range(len(arr) - 1):
        diff = arr[i + 1] - arr[i]
        
        if diff == mini_diff:
            ans.extend([arr[i],arr[i+1]])
        
        elif diff < mini_diff:
            mini_diff = diff
            ans = []
            ans.extend([arr[i], arr[i+1]])
    return ans
  
  
  # Time complexity: O(nlog(n)) !!! don't forget sorting 
  # Space complexity: O(n)

```





#### *Tower Breakers (14/3)



```python

def towerBreakers(n, m):
    if m == 1 or n % 2 == 0:
        return 2
    return 1
  
  # Time complexity: O(1)
  # Space complexity: O(1)

```





#### Minimum Absolute Difference in an Array (14/3)



```python

def minimumAbsoluteDifference(arr):
    arr.sort()
    min_diff = arr[1] - arr[0]
    
    for i in range(1, len(arr) - 1):
        min_diff = min(min_diff, arr[i + 1] - arr[i])
        
    return min_diff
  
  
  # Time complexity: O(nlog(n))
  # Space complexity: O(1)
  
```



#### *Caesar Cipher (14/3)

```python

def caesarCipher(s, k):
    k = k % 26
    ans = ""
    
    for char in s:
        if char.isalpha():
            code = ord(char)
            new_code = code + k
            if char.isupper():
                if new_code > 90:
                    new_code = new_code - 26
            else:
                if new_code > 122:
                    new_code = new_code - 26
            new_char = chr(new_code)
            ans += new_char
        else:
            ans += char
        
    return ans
  
  # Time complexity: O(n)
  # Space complexity: O(1)
  
```



### Week 5

#### Max Min (17/3)



```python

def maxMin(k, arr):
    arr.sort()
    window_start = 0
    ans = float("inf")
    
    for window_end in range(1, len(arr)):    
        if window_end - window_start + 1 == k:
            ans = min(ans, arr[window_end] - arr[window_start])
            window_start += 1
    return ans
  
    
  # Time complexity: O(nlog(n))
  # Space complexity: O(1)

```



#### Strong Password (17/3)



```python

numbers = "0123456789"
lower_case = "abcdefghijklmnopqrstuvwxyz"
upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
special_characters = "!@#$%^&*()-+"

def minimumNumber(n, password):
    
    condition_arr = [1] * 4
        
    for char in password:
        if char in numbers:
            condition_arr[0] = 0
        elif char in lower_case:
            condition_arr[1] = 0
        elif char in upper_case:
            condition_arr[2] = 0
        elif char in special_characters:
            condition_arr[3] = 0
    
    char_to_add = sum(condition_arr)
    
    # if n + char_to_add >= 6:
    #     return char_to_add
    # else:
    #     return 6 - n
    return max(6 - n, char_to_add)
  
  
  def minimumNumber(n, password):
    # Return the minimum number of characters to make the password strong
    special_characters = "!@#$%^&*()-+"
    
    has_digit = any(c.isdigit() for c in password)
    has_lower = any(c.islower() for c in password)
    has_upper = any(c.isupper() for c in password)
    has_spacial_char = any(c in special_characters for c in password)
    
    missing_types = 4 - sum([has_digit, has_lower, has_upper,  has_spacial_char])
    
    return max(6-n, missing_types)
  
  
  # Time complexity: O(n) (query string (e.g. numbers) are all fixed length thus, O(1) )
  # Space complexity: O(1)
  
```



#### Dynamic Array (17/3)



```python

def dynamicArray(n, queries):
    arr = [[] for _ in range(n)]
    lastAnswer = 0
    ans = []
    
    for i in range(len(queries)):
        
        x = int(queries[i][1])
        y = int(queries[i][2])
        idx = (x ^ lastAnswer) % n
        
        if (int(queries[i][0]) == 1):
            arr[idx].append(y)
        elif (int(queries[i][0]) == 2):
            lastAnswer = arr[idx][y % len(arr[idx])]
            ans.append(lastAnswer)
            
    return ans
  
  
    
  # Time complexity: O(Q), where 𝑄 is the number of queries.
  # Space complexity: O(Q + n) (we allocate an array of n lists)

```



#### Missing Numbers (21/3)



```python

def missingNumbers(arr, brr):
    dic = {}
    ans = []
    
    for ele in brr:
        dic[ele] = dic.get(ele, 0) + 1
    
    for ele in arr:
        dic[ele] = dic.get(ele) - 1
        
    for ele in dic:
        if dic.get(ele) > 0:
            ans.append(ele)
    
    ans.sort()
    
    return ans 

   # Time complexity: O(nlog(n))
  # Space complexity: O(n)

def missingNumbers2(arr, brr):
    arr.sort()
    brr.sort()
    s = set()
    
    counter = 0
    for i in range(len(brr)):
        if counter >= len(arr) or arr[counter] != brr[i]:
            s.add(brr[i])
            continue
        counter += 1

    return sorted(s)
  
  
  # Time complexity: O(nlog(n))
  # Space complexity: O(n)
  
```





#### The Full Counting Sort (21/3)



```python

def countSort(arr):
    max_key = max(int(ele[0]) for ele in arr )
    ans_arr = [[] for i in range(max_key + 1) ]
    
    half = len(arr) // 2
    
    for i, (key, value) in enumerate(arr):
        val = '-' if i < half else value
        ans_arr[int(key)].append(val)
        
    for i in range(len(ans_arr)):
        ans_arr[i] = ' '.join(ans_arr[i])
    
    ans = ' '.join(ans_arr)
    
    print(ans.strip())
    
    
      
  # Time complexity: O(n)
  # Space complexity: O(n)
  
```



#### Grid Challenge (21/3)



```python

def gridChallenge(grid):
    
    col_str = [""] * len(grid[0])
    
    for str in grid:
        str = "".join(sorted(str))    
        for i in range(len(str)):
            col_str[i] += str[i]
    
    for str in col_str:
        dup_col_str = str
        col_str = "".join(sorted(str))
        if dup_col_str != col_str:
            return "NO"
    
    return 'YES' 

  # Time complexity: O(n * mlog(m))
  # Space complexity: O(n * m)
  

def gridChallenge2(grid):
    sorted_str = []
    
    for str in grid:
        str = "".join(sorted(str))
        sorted_str.append(str)

    for col in range(len(grid[0])):
        for row in range(len(grid) - 1):
            if sorted_str[row][col] > sorted_str[row + 1][col]:
                return "NO"
    return "YES"
  
  
  # Time complexity: O(n * mlog(m))
 # Space complexity: O(n * m)
  
```





#### *Sansa and XOR (22/3)



```python

def sansaXor(arr):
    n = len(arr)
    ans = 0
    win_start = 0
    
    for win_size in range(1, n + 1):
        xor = 0
        for win_end in range(n):
            xor ^= arr[win_end]
            if win_end - win_start + 1 == win_size:
                ans ^= xor
                # remove element from current window
                xor ^= arr[win_start]
                win_start += 1
        win_start = 0 
        
        
    return ans
  
  # solution not passes
  # Time complexity: O(n^2) 
  # Space complexity: O(1)


  # key here (3 ^ 3 = 0)
  # 3,4,5
  #3, 4, 5,  3,4,  4,5  3,4,5
def sansaXor(arr):

    if len(arr) % 2 == 0:
        return 0
    
    ans = 0
    
    for i, ele in enumerate(arr):
        if (i + 1) % 2 != 0:
            ans ^= ele
            
    return ans  
  
  
  # Time complexity: O(n)
  # Space complexity: O(1)
  
```



### Week 6



#### *Sherlock and Array (24/3)

```python


def balancedSums(arr):
    if len(arr) == 1:
        return "YES"
        
    total_sum = sum(arr)    
    left_sum = 0
    cur = 0
    right_sum = total_sum - left_sum - arr[cur]
    
    while cur < len(arr) - 1:
        
        if left_sum == right_sum:
            return "YES"
        
        left_sum += arr[cur]
        cur += 1
        right_sum -= arr[cur]
    
    return "NO"

def balancedSums(arr):
    total_sum = sum(arr)
    left_sum = 0
    for i, v in enumerate(arr):
        right_sum = total_sum - left_sum - v
        
        if right_sum == left_sum:
            return "YES"
        
        left_sum += v
        
    return "NO"
  
  
  # Time complexity: O(n)
  # Space complexity: O(1)
  
  
```



#### *Sum vs XOR (26/3)



```python


# The condition n + x = n ^ x holds only when there are no carry-over bits in the addition of n and x. That happens only when n and x do not have 1s in the same bit position. So, for each bit in n that is 0, we can freely choose either 0 or 1 in that position in x (because it won’t cause a carry).

def sumXor(n):
    if n == 0:
        return 1
    
    count = 0
    while n:
        if n % 2 == 0:
            count += 1
        
        n = n // 2
    
    return 2 ** count
  
  
  # Time complexity: O(log(n))
  # Space complexity: O(1)
  
  
```



#### *Counter game (26/3)



```python

def counterGame(n):
    count = 0
    while n > 1:
        power = math.log(n) / math.log(2)
        
        if power == int(power):
            n = n / 2
            
        else:
            n = n - 2 ** int(power)
        
        count += 1
    
    return "Louise" if count % 2 == 1 else "Richard"
  
  
  # Time complexity: O(log(n))
  # Space complexity: O(1)

```



#### *Recursive Digit Sum (26/3)



```python

def superDigit(n, k):
    
    sum = 0
    
    for char in n:
        sum += int(char)
        
    sum *= k
    
    if sum <= 9:
        return sum
    
    return superDigit(str(sum), 1)
  
  
  # Time complexity: O(l) (l:number of digits in the initial string n)
  # Space complexity: O(log(l))
  
```



#### Forming a Magic Square(3/4)



```python


def formingMagicSquare(s):
    
    magic_squares = [
        [[8, 3, 4], [1, 5, 9], [6, 7, 2]],
        [[4, 3, 8], [9, 5, 1], [2, 7, 6]],
        [[6, 7, 2], [1, 5, 9], [8, 3, 4]],
        [[2, 7, 6], [9, 5, 1], [4, 3, 8]],
        [[8, 1, 6], [3, 5, 7], [4, 9, 2]],
        [[6, 1, 8], [7, 5, 3], [2, 9, 4]],
        [[4, 9, 2], [3, 5, 7], [8, 1, 6]],
        [[2, 9, 4], [7, 5, 3], [6, 1, 8]]
    ]
    ans = float('inf')
    
    for magic in magic_squares:
        cost = 0
        for i in range(3):
            for j in range(3):
                diff = abs(magic[i][j] - s[i][j])
                cost += diff
        
        ans = min(ans, cost)
        
    return ans

  # Time complexity: O(l) (Constant)
  # Space complexity: O(l)
  

```



#### *Gaming Array 1 (3/4)



```python

def finMax(arr, end):
    
    max_ele = arr[0]
    max_idx = 0
    
    for i in range(end):
        if arr[i] > max_ele:
            max_ele = arr[i]
            max_idx = i
            
    return max_idx

def gamingArray(arr):
    
    # Bob Flase, Andy True
    flag = False
    end_idx = len(arr)
    
    while (end_idx > 0):
        
        max_idx = finMax(arr, end_idx)
        end_idx = max_idx
        
        if end_idx > 0:
            flag = not flag
        
    return 'BOB' if flag is False else 'ANDY'
  
	# Time complexity: O(n^2)  not valid
  # Space complexity: O(l)
  
  
def gamingArray(arr):
    counter = 0
    max = 0
    
    for i in arr:
        if i > max:
            max = i
            counter += 1
    
    return "ANDY" if counter % 2 == 0 else "BOB"
  
  # Time complexity: O(n)
  # Space complexity: O(l)
  
```



#### *Misère Nim (3/4)

```python

def misereNim(s):
    
    nimSum = 0
    countOnes = 0
    
    for ele in s:
        nimSum ^= ele
        if ele == 1:
            countOnes += 1
    
    # all 1's
    if countOnes == len(s):
        if countOnes % 2 == 0:
            return "First"
        else:
            return "Second"
            
    else:
        if nimSum == 0:
            return "Second"
        else:
            return "First"
          
	# Time complexity: O(n)
  # Space complexity: O(l)
  
```



