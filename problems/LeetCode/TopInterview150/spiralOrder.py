class Solution:
    def spiralOrder(self, matrix: list[list[int]]) -> list[int]:

        directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]

        dir_idx = 0
        INVALID_NUM = 101
        rows = len(matrix)
        cols = len(matrix[0])
        r = 0
        c = 0
        res: list[int] = []

        while len(res) < rows * cols:
            res.append(matrix[r][c])
            matrix[r][c] = INVALID_NUM

            dr = directions[dir_idx][0]
            dc = directions[dir_idx][1]

            # Check and update directions
            if (
                r + dr < 0
                or r + dr >= rows
                or c + dc < 0
                or c + dc >= cols
                or matrix[r + dr][c + dc] == INVALID_NUM
            ):
                dir_idx += 1
                dir_idx %= 4

            # Update positions
            r += directions[dir_idx][0]
            c += directions[dir_idx][1]

        return res


# Time: O(m * n)
# Space: O(m * n)