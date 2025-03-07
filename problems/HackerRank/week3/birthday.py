def birthday(s, d, m):
    
    window_size = 0
    windown_sum = 0
    window_start = 0
    ans = 0
    
    for i in range(len(s)):
        window_size += 1
        windown_sum += s[i]
        
        if window_size == m:
            if windown_sum == d:
                ans += 1
            
            windown_sum -= s[window_start]
            window_start += 1
            window_size -= 1
        
    return ans