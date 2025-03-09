def pickingNumbers(a):
    window_start = 0
    ans = 0
    a.sort()
    
    for window_end in range(1, len(a)):
        if a[window_end] - a[window_start] <= 1:
            ans = max(ans, window_end - window_start + 1)
        while a[window_end] - a[window_start] > 1:
            window_start += 1
            
    return ans