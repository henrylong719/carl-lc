from typing import List

class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        left = 0
        right = len(numbers) - 1

        while(True):
            current = numbers[left] + numbers[right]
            if current == target:
                return [left + 1, right + 1 ]
            if current > target:
                right -= 1
            else:
          			left += 1