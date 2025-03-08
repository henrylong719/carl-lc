def maximumPerimeterTriangle(sticks):
    sticks.sort()
    window_start = 0
    window_sum = 0
    n = len(sticks)
    max_tri = -1
    ans = []

    for windown_end in range(n):
        window_sum += sticks[windown_end]
        if (windown_end - window_start + 1 == 2):
            current_window = windown_end + 1
            while current_window < n :
                trangle_sum = window_sum + sticks[current_window]
                if window_sum <= sticks[current_window] or trangle_sum < max_tri:
                    break
                max_tri = trangle_sum
                ans = [sticks[window_start],sticks[windown_end], sticks[current_window]]
                current_window += 1
            
            window_sum -= sticks[window_start]
            window_start += 1
        
    return ans if max_tri != -1 else [-1]
  
  
def maximumPerimeterTriangle2(sticks):
	sticks.sort()
	sticks.reverse()
	
	
	for i in range(len(sticks) - 2):
			side1 = sticks[i]
			side2 = sticks[i+1]
			side3 = sticks[i+2]
			
			if side3 + side2 > side1:
					return [side3, side2, side1]
					
	return [-1]