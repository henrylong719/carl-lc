def sumXor(n):
    if n == 0:
        return 1
    
    count = 0
    while n:
        if n % 2 == 0:
            count += 1
        
        n = n //2
    
    return 2 ** count