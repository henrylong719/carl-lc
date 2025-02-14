def minCostClimbingStairs(self, cost: List[int]) -> int:
		cost.append(0)

		for i in range(len(cost) - 3, -1, -1):
				cost[i] +=  min(cost[i+1], cost[i+2])
		
		return min(cost[0], cost[1])

def minCostClimbingStairs(self, cost: List[int]) -> int:

		prev2 = prev1 = 0
		n = len(cost)

		for i in range(2, n + 1):
				temp = min(prev1 + cost[i-1], prev2 + cost[i - 2])
				prev2 = prev1 
				prev1 = temp

		return prev1