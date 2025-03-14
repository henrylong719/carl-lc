def caesarCipher(s, k):
    k = k % 26
    ans = ""
    
    for char in s:
        if char.isalpha():
            code = ord(char)
            new_code = code + k
            if char.isupper():
                if new_code > 90:
                    new_code = new_code - 26
            else:
                if new_code > 122:
                    new_code = new_code - 26
            new_char = chr(new_code)
            ans += new_char
        else:
            ans += char
        
    return ans
  
  