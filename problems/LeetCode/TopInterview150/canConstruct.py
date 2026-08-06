class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:

        count = {}

        for char in magazine:
            count[char] = count.get(char, 0) + 1

        for char in ransomNote:
            if count.get(char, 0) == 0:
                return False

            count[char] -= 1

        return True

class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:

        # keeps only characters that are still missing. For example:
        # ransomNote = "aa"
        # magazine = "ab"
        # Counter(ransomNote) - Counter(magazine)
        # Counter({'a': 1})
        # Because the result is not empty, not converts it to False.

        return not Counter(ransomNote) - Counter(magazine)


# Time: O(n)
# Space: O(n)