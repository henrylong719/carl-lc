class Solution:
    def hIndex(self, citations: List[int]) -> int:

        citations.sort(reverse=True)
        h = 0

        for i, citation in enumerate(citations):

            papers = i + 1

            if citation >= papers:
                h = papers
            else:
                break

        return h


# Time: O(n)
# Space: O(1)