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





