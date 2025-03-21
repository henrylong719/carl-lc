def countSort(arr):
    max_key = max(int(ele[0]) for ele in arr )
    ans_arr = [[] for i in range(max_key + 1) ]
    
    half = len(arr) // 2
    
    for i, (key, value) in enumerate(arr):
        val = '-' if i < half else value
        ans_arr[int(key)].append(val)
        
    for i in range(len(ans_arr)):
        ans_arr[i] = ' '.join(ans_arr[i])
    
    ans = ' '.join(ans_arr)
    
    print(ans.strip())