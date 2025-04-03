def gamingArray(arr):
    
    # Bob Flase, Andy True
    flag = False
    
    while (len(arr) > 1):
        max_ele = max(arr)
        idx = arr.index(max_ele)
        arr = arr[:idx]
        
        if len(arr) > 0:
            flag = not flag
        
    return 'BOB' if flag is False else 'ANDY'


print(gamingArray([3,1]))


def gamingArray(arr):
    counter = 0
    max = 0
    
    for i in arr:
        if i > max:
            max = i
            counter += 1
    
    return "ANDY" if counter % 2 == 0 else "BOB"