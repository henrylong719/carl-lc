def twoArrays(k, A, B):
    if len(A) != len(B): 
        return 'NO'

    A.sort()
    B.sort()
    B.reverse()
    
    for i in range(len(A)):
        if A[i] + B[i] < k:
            return 'NO'
    
    return 'YES'