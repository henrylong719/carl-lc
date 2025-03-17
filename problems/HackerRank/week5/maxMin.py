def maxMin(k, arr):
    arr.sort()
    window_start = 0
    ans = float("inf")
    
    for window_end in range(1, len(arr)):    
        if window_end - window_start + 1 == k:
            ans = min(ans, arr[window_end] - arr[window_start])
            window_start += 1
    return ans