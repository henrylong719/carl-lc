def separateNumbers(s):
    substring = ""
    for digit in range(len(s) // 2):
        substring += s[digit]
        num = int(substring)
        target_string = substring
        
        while len(target_string) < len(s):
            num = num + 1
            target_string += str(num)
            
        if target_string == s:
            print("YES " + substring)
            return
            
    print("NO")