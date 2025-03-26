
def counterGame(n):
    count = 0
    
    while n > 1:
        power = math.log(n) / math.log(2)
        
        if power == int(power):
            n = n / 2
            
        else:
            n = n - 2 ** int(power)
        
        count += 1
    
    return "Louise" if count % 2 == 1 else "Richard"
     
    
print(counterGame(6))