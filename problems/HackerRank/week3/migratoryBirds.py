def migratoryBirds(arr):
    counter = [0] * 6
    ans = 0
    
    for ele in arr:
        counter[ele] += 1
        
    type_max = counter[1]
    for i in range(1, len(counter)):
        if counter[i] > type_max:
            type_max = counter[i]
            ans = i
    
    return ans