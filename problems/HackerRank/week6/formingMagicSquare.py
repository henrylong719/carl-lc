magic_squares = [
        [[8, 3, 4], [1, 5, 9], [6, 7, 2]],
        [[4, 3, 8], [9, 5, 1], [2, 7, 6]],
        [[6, 7, 2], [1, 5, 9], [8, 3, 4]],
        [[2, 7, 6], [9, 5, 1], [4, 3, 8]],
        [[8, 1, 6], [3, 5, 7], [4, 9, 2]],
        [[6, 1, 8], [7, 5, 3], [2, 9, 4]],
        [[4, 9, 2], [3, 5, 7], [8, 1, 6]],
        [[2, 9, 4], [7, 5, 3], [6, 1, 8]]
]


def formingMagicSquare(s):
    ans = float('inf')
    
    for magic in magic_squares:
        cost = 0
        for i in range(3):
            for j in range(3):
                diff = abs(magic[i][j] - s[i][j])
                cost += diff
           
        ans = min(ans, cost)
        
    return ans