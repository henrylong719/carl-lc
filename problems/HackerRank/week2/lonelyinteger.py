def lonelyinteger(a):
    
    count_map = {}
    
    for num in a:
        count_map[num] = count_map.get(num, 0) + 1
        
    
    for k, v in count_map.items():
        if v == 1:
            return k
          
          
def lonelyinteger2(a):
    return 2 * sum(set(a)) - sum(a)