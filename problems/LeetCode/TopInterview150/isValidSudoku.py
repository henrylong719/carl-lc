class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:

        rows = len(board)
        cols = len(board[0])

        row_set = set()
        col_set = set()
        grid_set = set()

        # check rows
        for r in range(rows):
            for c in range(cols):
                value = board[r][c]
                if value == ".":
                    continue

                grid_r = r // 3
                grid_c = c // 3

                if (
                    f"{r}" + value in row_set
                    or f"{c}" + value in col_set
                    or f"{grid_r}-{grid_c}-{value}" in grid_set
                ):
                    return False

                row_set.add(f"{r}" + value)
                col_set.add(f"{c}" + value)
                grid_set.add(f"{grid_r}-{grid_c}-{value}")

        return True
    
    
class Solution1:
    def isValidSudoku(self, board: List[List[str]]) -> bool:

        rows = len(board)
        cols = len(board[0])

        row_set = set()
        col_set = set()
        grid_set = set()

        # check rows
        for r in range(rows):
            for c in range(cols):
                value = board[r][c]
                if value == ".":
                    continue

                grid_id = (r // 3) * 3 + (c // 3)

                if (
                    f"{r}-{value}" in row_set
                    or f"{c}-{value}" in col_set
                    or f"{grid_id}-{value}" in grid_set
                ):
                    return False

                row_set.add(f"{r}-{value}")
                col_set.add(f"{c}-{value}")
                grid_set.add(f"{grid_id}-{value}")

        return True


class Solution2:
    def isValidSudoku(self, board: List[List[str]]) -> bool:

        rows = len(board)
        cols = len(board[0])

        row_set = set()
        col_set = set()
        box_set = set()

        # check rows
        for r in range(rows):
            for c in range(cols):
                value = board[r][c]
                if value == ".":
                    continue

                row_key = (r, value)
                col_key = (c, value)
                box_key = (r // 3, c // 3, value)

                if row_key in row_set or col_key in col_set or box_key in box_set:
                    return False

                row_set.add(row_key)
                col_set.add(col_key)
                box_set.add(box_key)

        return True

# Time: O(n^2)
# Space: O(n)