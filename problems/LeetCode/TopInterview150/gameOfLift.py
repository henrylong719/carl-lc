class Solution:
    def gameOfLife(self, board: List[List[int]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """

        rows = len(board)
        cols = len(board[0])

        def withBoard(r: int, c: int) -> bool:
            if r >= 0 and r < rows and c >= 0 and c < cols:
                return True
            return False

        directions = [
            (-1, 0),
            (-1, 1),
            (0, 1),
            (1, 1),
            (1, 0),
            (1, -1),
            (0, -1),
            (-1, -1),
        ]

        for r in range(rows):
            for c in range(cols):

                live_neigh = 0

                for dr, dc in directions:
                    if withBoard(r + dr, c + dc) is False:
                        continue
                    if abs(board[r + dr][c + dc]) == 1:
                        live_neigh += 1

                # live -> die
                if board[r][c] == 1 and (live_neigh < 2 or live_neigh > 3):
                    board[r][c] = -1

                # die -> live
                if board[r][c] == 0 and live_neigh == 3:
                    board[r][c] = 2

        for r in range(rows):
            for c in range(cols):
                if board[r][c] <= 0:
                    board[r][c] = 0
                else:
                    board[r][c] = 1


# Time: O(r*c)
# Space: O(1)