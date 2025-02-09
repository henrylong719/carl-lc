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

















