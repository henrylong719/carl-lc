def icecreamParlor(m, arr):
    
    seen = {}
    
    for i, price in enumerate(arr):
        
        need = m - price
        
        if need in seen:
            return [seen[need] + 1, i + 1]
            
        seen[price] = i
    
    return []