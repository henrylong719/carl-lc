def countingSort(arr):
    ans = [0] * 100
    
    for num in arr:
        ans[num] += 1
    
    return ans
    
    
# Complete version
def countingSort(arr):
    # Initialize frequency array for numbers 0 to 99
    count = [0] * 100
    
    # Count the occurrences of each number in arr
    for num in arr:
        count[num] += 1
    
    # Reconstruct the sorted array from the frequency counts
    sorted_arr = []
    for i in range(len(count)):
        sorted_arr.extend([i] * count[i])
    
    return sorted_arr
