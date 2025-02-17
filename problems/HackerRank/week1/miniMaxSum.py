def miniMaxSum(arr):
    arr.sort()
    
    max = sum(arr[i] for i in range(len(arr)) if i > 0)
    min = sum(arr[i] for i in range(len(arr)) if i < len(arr) - 1)
    
    print(min, max)
    
    
  
    
  # better approach
def miniMaxSum2(arr):
    total = sum(arr)

    min_sum = total - max(arr)    
    max_sum = total - min(arr)
    
    print(min_sum, max_sum)