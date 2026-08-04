class Solution:
    def setZeroes(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """

        first_row_has_zero = False
        first_col_has_zero = False

        rows = len(matrix)
        cols = len(matrix[0])

        for c in range(cols):
            if matrix[0][c] == 0:
                first_row_has_zero = True

        for r in range(rows):
            if matrix[r][0] == 0:
                first_col_has_zero = True

        # Use first row and col as a marker

        for r in range(1, rows):
            for c in range(1, cols):
                if matrix[r][c] == 0:
                    matrix[0][c] = 0
                    matrix[r][0] = 0

        # Update cols
        for r in range(1, rows):
            if matrix[r][0] == 0:
                for c in range(1, cols):
                    matrix[r][c] = 0

        # Update rows
        for c in range(1, cols):
            if matrix[0][c] == 0:
                for r in range(1, rows):
                    matrix[r][c] = 0

        if first_row_has_zero:
            for c in range(cols):
                matrix[0][c] = 0

        if first_col_has_zero:
            for r in range(rows):
                matrix[r][0] = 0
                

# Time: O(n^2)
# Space: O(1)