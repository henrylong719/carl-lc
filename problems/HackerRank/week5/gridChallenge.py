def gridChallenge(grid):
    
    col_str = [""] * len(grid[0])
    
    for str in grid:
        str = "".join(sorted(str))    
        for i in range(len(str)):
            col_str[i] += str[i]
    
    for str in col_str:
        dup_col_str = str
        col_str = "".join(sorted(str))
        if dup_col_str != col_str:
            return "NO"
    
    return 'YES' 


def gridChallenge2(grid):
    sorted_str = []
    
    for str in grid:
        str = "".join(sorted(str))
        sorted_str.append(str)

    for col in range(len(grid[0])):
        for row in range(len(grid) - 1):
            if sorted_str[row][col] > sorted_str[row + 1][col]:
                return "NO"
    return "YES"