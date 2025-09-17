def divisibleSumPairs(n, k, ar):
    freq = [0] * k
    ans = 0
    
    for a in ar:
        r = a % k
        # find the matched reminder 
        ans += freq[(k - r) % k]
        freq[r] += 1
    
    return ans