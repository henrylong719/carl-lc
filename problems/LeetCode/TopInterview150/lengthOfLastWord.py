class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        trimed_s = s.strip()
        count =  0

        for ch in reversed(trimed_s):
            if ch != " ":
                count += 1
                continue
            return count
        
        return count
    
class Solution:
    def lengthOfLastWord(self, s: str) -> int:

        end = len(s) - 1

        while end >= 0 and s[end] == " ":
            end -= 1

        start = end

        while start >= 0 and s[start] != " ":
            start -= 1

        return end - start


# Time: O(n)
# Space: O(n)