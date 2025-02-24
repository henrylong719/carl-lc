def pangrams(s):
    alphabet = [0] * 26
    
    for char in s:
        if not char.isalpha():
            continue
            
        pos = ord(char.lower()) - 97
        alphabet[pos] += 1
    
    return "pangram" if min(alphabet) >= 1 else "not pangram"