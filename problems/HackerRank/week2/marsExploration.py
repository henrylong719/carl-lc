def marsExploration(s):
    
    times = len(s) // 3
    correct_s = "SOS" * times
    ans = 0
    
    for i in range(len(s)):
        if correct_s[i] != s[i]:
            ans += 1
    
    return ans
  
  
def marsExploration2(s):
    
    
    ans = 0
    
    for i in range(0, len(s), 3):
        if s[i] != "S": 
            ans += 1
        if s[i+1] != "O": 
            ans += 1
        if s[i+2] != "S": 
            ans += 1
        
    return ans