def divisibleSumPairs(n, k, ar):
    ans = 0
    for i in range(n - 1):
        for j in range(i + 1, n):
            if (ar[i] + ar[j]) % k == 0:
                ans += 1
    return ans
  
  
  # better approach
  
def divisibleSumPairs2(n, k, ar):
	remainder_map ={}
	ans = 0
	
	for num in ar:
			remainder = num % k
			complement = (k - remainder) % k
			
			if complement in remainder_map:
					ans += remainder_map[complement]
			
			remainder_map[remainder] = remainder_map.get(remainder, 0) + 1
			
	return ans