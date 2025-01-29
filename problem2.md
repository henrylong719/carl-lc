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



