def diagonalDifference(arr):
    row_len = len(arr)
    
    left_diag = right_diag = 0
    
    for i in range(row_len):
        # 0,0  1,1 2,2
        left_diag += arr[i][i]
        # 0,2 1,1 2,0
        right_diag += arr[i][row_len - 1 - i]
        
    return abs(left_diag - right_diag)
