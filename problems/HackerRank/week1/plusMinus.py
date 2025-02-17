def plusMinus(arr):
    n = len(arr)
    pos = sum(1 for num in arr if num > 0)
    neg = sum(1 for num in arr if num < 0)
    zero = n - pos - neg  # Instead of filtering again, we derive from total count
    
    print(pos / n)
    print(neg / n)
    print(zero / n)
    
    
    
plusMinus([1,2,3,4,5])