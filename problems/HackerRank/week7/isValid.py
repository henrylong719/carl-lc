

def checkEqual(arr):
    
    val = arr[0]
    
    for i in range(arr):
        
        count = arr[i]
        
        if count == 0:
            continue
        
        if val == 0:
            val = count
                    
        if count != val:
            return False
    
    return True
            
   

def isValid(s):
    frequency = [0] * 26
    
    for i in range(len(s)):
        letter = s[i]
        asc = ord(letter) - 97
        frequency[asc] += 1
    
    
    max = -float('inf')
    maxIdx = 0
    
    min = float('inf')
    minIdx = 0
    
    for i in range(len(frequency)):
        
        fre = frequency[i]
        
        if fre == 0:
            continue
        
        if fre > max:
            max = fre
            maxIdx = i
        
        if fre < min:
            min = fre
            minIdx = i
        
    if max == min: 
        return 'YES'
    
    maxFrequency = frequency.copy()
    maxFrequency[maxIdx] -= 1
    
    minFrequency = frequency.copy()
    minFrequency[minIdx] -= 1
    
    if checkEqual(maxFrequency) or checkEqual(minFrequency):
        return 'Yes'
    
    return 'No'
    
	
    
      
    
    
        
        
        
    

isValid('abc')


    
    