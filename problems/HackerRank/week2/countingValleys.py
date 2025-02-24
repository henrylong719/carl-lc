def countingValleys(steps, path):
    
    ans = 0
    level = 0
    for ele in path:
        
        if ele == "U":
            level += 1
        elif ele == "D":
            level -= 1
    
        if level == 0 and ele == "U":
            ans += 1
    
    return ans