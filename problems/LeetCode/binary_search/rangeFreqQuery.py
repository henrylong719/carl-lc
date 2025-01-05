from bisect import bisect_left, bisect_right
from collections import defaultdict
from typing import List


class RangeFreqQuery:

    def __init__(self, arr: List[int]):
        pos = defaultdict(list)

        for i, x in enumerate(arr):
            pos[x].append(i)
        
        self.pos = pos
        
    def query(self, left: int, right: int, value: int) -> int:
        arr = self.pos[value]
        return bisect_right(arr, right) - bisect_left(arr, left)