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