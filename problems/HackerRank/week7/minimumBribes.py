def minimumBribes(q):

    bribes = 0    
    
    for i, p in enumerate(q):
        if p - (i+1) > 2:
            print("Too chaotic")
            return
    
    for i, p in enumerate(q):
        for j in range(max(p-2, 0), i):
            if (q[j] > p):
                bribes += 1
                
    
    print(bribes)