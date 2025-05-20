def climbingLeaderboard(ranked, player):
    
    uniqueRanks = list(set(ranked))
    
    uniqueRanks.sort()
    
    uniqueRanks.reverse()
    
    pos = len(uniqueRanks) - 1
    
    ans = []
    
    for i in range(len(player)):
        
        score = player[i]
        
        while pos >= 0 and score >= uniqueRanks[pos]:
            pos -= 1
        
        ans.append(pos + 1 + 1)		

    return ans
        
        
    

print(climbingLeaderboard([100,100,50,40,40,20,10],[5, 25, 50, 120]))