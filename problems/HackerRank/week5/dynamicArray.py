def dynamicArray(n, queries):
    arr = [[] for _ in range(n)]
    lastAnswer = 0
    ans = []
    
    for i in range(len(queries)):
        
        x = int(queries[i][1])
        y = int(queries[i][2])
        idx = (x ^ lastAnswer) % n
        
        if (int(queries[i][0]) == 1):
            arr[idx].append(y)
        elif (int(queries[i][0]) == 2):
            lastAnswer = arr[idx][y % len(arr[idx])]
            ans.append(lastAnswer)
            
    return ans