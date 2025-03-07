def sockMerchant(n, ar):
    # Write your code here
    
    ar.sort()
    ans = 0
    
    for i in range(n-1):
      print(i)
      if ar[i] == ar[i+1]:
          ans += 1
          i += 1
      
            
    return ans
  
def sockMerchant2(n, ar):
    # 10 10 10 10 20 20 20 30 50 
    
    ar.sort()
    ans = 0
    i = 0
    
    while i + 1 < n:
        if ar[i] == ar[i + 1]:
            ans += 1
            i += 1
        i += 1
        
    return ans
    
            
  
  
print(sockMerchant(10, [1,1,3,1,2,1,3,3,3,3]));