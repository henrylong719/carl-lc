def sansaXor(arr):
    n = len(arr)
    ans = 0
    win_start = 0
    
    for win_size in range(1, n + 1):
        xor = 0
        for win_end in range(n):
            xor ^= arr[win_end]
            if win_end - win_start + 1 == win_size:
                ans ^= xor
                xor ^= arr[win_start]
                win_start += 1
        win_start = 0 
        
        
    return ans


def sansaXor(arr):
    
    if len(arr) % 2 == 0:
        return 0
    
    ans = 0
    
    for i, ele in enumerate(arr):
        if (i + 1) % 2 != 0:
            ans ^= ele
            
    return ans  