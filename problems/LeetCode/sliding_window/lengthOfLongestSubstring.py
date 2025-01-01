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