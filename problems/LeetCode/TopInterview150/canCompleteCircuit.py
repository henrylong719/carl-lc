class Solution:
    def canCompleteCircuit(self, gas: List[int], cost: List[int]) -> int:

        total_balance = 0
        current_tank = 0

        start = 0

        # If you start from station A and stuck at B, then you can't
        # get to B from any startion between A and B
        for i, (available, required) in enumerate(zip(gas, cost)):

            balance = available - required

            total_balance += balance
            current_tank += balance

            if current_tank < 0:
                current_tank = 0
                start = i + 1

        return start if total_balance >= 0 else -1


# Time: O(n)
# Space: O(1)