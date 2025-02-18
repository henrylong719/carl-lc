def matchingStrings(strings, queries):
    fre_map = {}
    ans = []
    
    for ele in strings:
        fre_map[ele] = fre_map.get(ele, 0) + 1
    
    for ele in queries:
        ans.append(fre_map.get(ele, 0))    
        
    return ans