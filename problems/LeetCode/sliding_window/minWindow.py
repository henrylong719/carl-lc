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