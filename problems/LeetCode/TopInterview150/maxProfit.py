class Solution:
    def maxProfit(self, prices: List[int]) -> int:

        profit = 0
        lowest = prices[0]

        for i in range(1, len(prices)):
            if prices[i] < lowest:
                lowest = prices[i]
                continue

            profit = max(profit, prices[i] - lowest)

        return profit
        
# Time: O(n)
# Space: O(1)