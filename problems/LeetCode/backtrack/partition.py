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