class Solution:
    def hIndex(self, citations: List[int]) -> int:
        
        # Have at least n papers cited 
        
        left = 1
        right = len(citations) - 1

        while left <= right:

            mid = (left + right) // 2

            if citations[-mid] >= mid:
                left = mid + 1
            else:
                right = mid - 1

        return right