def closestNumbers(arr):
    arr.sort()
    mini_diff = arr[1] - arr[0]
    ans = []
    
    for i in range(len(arr) - 1):
        diff = arr[i + 1] - arr[i]
        
        if diff == mini_diff:
            ans.extend([arr[i],arr[i+1]])
        
        elif diff < mini_diff:
            mini_diff = diff
            ans = []
            ans.extend([arr[i], arr[i+1]])
    return ans