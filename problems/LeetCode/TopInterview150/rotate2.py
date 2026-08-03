import copy


class Solution:
    def rotate(self, matrix: list[list[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """

        duplicate = copy.deepcopy(matrix)

        rows = len(matrix)
        cols = len(matrix[0])

        # matrix[0][0] = duplicate[2][0]
        # matrix[0][1] = duplicate[1][0]
        # matrix[0][2] = duplicate[0][0]

        # matrix[1][0] = duplicate[2][1]
        # matrix[1][1] = duplicate[1][1]
        # matrix[1][2] = duplicate[0][1]

        for r in range(rows):
            for c in range(cols):
                matrix[r][c] = duplicate[rows-c-1][r]
        

class Solution2:
    def rotate(self, matrix: list[list[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """

        rows = len(matrix)

        # Transpose across the main diagonal
        for r in range(rows):
            for c in range(r):
                matrix[r][c], matrix[c][r] = matrix[c][r], matrix[r][c]

        # reverse each row
        for row in range(rows):
            matrix[row].reverse()
