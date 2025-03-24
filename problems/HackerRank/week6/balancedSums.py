def balancedSums(arr):
    if len(arr) == 1:
        return "YES"
        
    total_sum = sum(arr)    
    left_sum = 0
    cur = 0
    right_sum = total_sum - left_sum - arr[cur]
    
    while cur < len(arr) - 1:
        
        if left_sum == right_sum:
            return "YES"
        
        left_sum += arr[cur]
        cur += 1
        right_sum -= arr[cur]
    
    return "NO"

def balancedSums(arr):
    total_sum = sum(arr)
    left_sum = 0
    for i, v in enumerate(arr):
        right_sum = total_sum - left_sum - v
        
        if right_sum == left_sum:
            return "YES"
        
        left_sum += v
        
    return "NO"