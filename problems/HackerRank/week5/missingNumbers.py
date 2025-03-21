def missingNumbers(arr, brr):
    dic = {}
    ans = []
    
    for ele in brr:
        dic[ele] = dic.get(ele, 0) + 1
    
    for ele in arr:
        dic[ele] = dic.get(ele) - 1
        
    for ele in dic:
        if dic.get(ele) > 0:
            ans.append(ele)
    
    ans.sort()
    
    return ans 


def missingNumbers2(arr, brr):
    arr.sort()
    brr.sort()
    s = set()
    
    counter = 0
    for i in range(len(brr)):
        if counter >= len(arr) or arr[counter] != brr[i]:
            s.add(brr[i])
            continue
        counter += 1

    return sorted(s)