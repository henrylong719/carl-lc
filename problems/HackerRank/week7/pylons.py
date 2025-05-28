def pylons(k, arr):
    
    n = len(arr)
    i = 0
    ans = 0
    
    while i < n:
        rightmost = min(n - 1, i + (k - 1))
        leftmost = max(0, i - (k - 1))
        
        position = -1
        for j in range(rightmost, leftmost -1, -1):
            if arr[j] == 1:
                position = j
                break
        
        if position == -1:
            return -1
        
        ans += 1
        
        i = position + k
        
    return ans