def superDigit(n, k):
    
    sum = 0
    
    for char in n:
        sum += int(char)
        
    sum *= k
    
    if sum <= 9:
        return sum
    
    return superDigit(str(sum), 1)