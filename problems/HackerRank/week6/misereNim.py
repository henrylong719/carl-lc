def misereNim(s):
    
    nimSum = 0
    countOnes = 0
    
    for ele in s:
        nimSum ^= ele
        if ele == 1:
            countOnes += 1
    
    # all 1's
    if countOnes == len(s):
        if countOnes % 2 == 0:
            return "First"
        else:
            return "Second"
            
    else:
        if nimSum == 0:
            return "Second"
        else:
            return "First"