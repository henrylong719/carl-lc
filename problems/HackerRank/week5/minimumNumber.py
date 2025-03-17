numbers = "0123456789"
lower_case = "abcdefghijklmnopqrstuvwxyz"
upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
special_characters = "!@#$%^&*()-+"

def minimumNumber(n, password):
    
    condition_arr = [1] * 4
        
    for char in password:
        if char in numbers:
            condition_arr[0] = 0
        elif char in lower_case:
            condition_arr[1] = 0
        elif char in upper_case:
            condition_arr[2] = 0
        elif char in special_characters:
            condition_arr[3] = 0
    
    char_to_add = sum(condition_arr)
    
    # if n + char_to_add >= 6:
    #     return char_to_add
    # else:
    #     return 6 - n
    return max(6 - n, char_to_add)
  
def minimumNumber(n, password):
    # Return the minimum number of characters to make the password strong
    special_characters = "!@#$%^&*()-+"
    
    has_digit = any(c.isdigit() for c in password)
    has_lower = any(c.islower() for c in password)
    has_upper = any(c.isupper() for c in password)
    has_spacial_char = any(c in special_characters for c in password)
    
    missing_types = 4 - sum([has_digit, has_lower, has_upper,  has_spacial_char])
    
    return max(6-n, missing_types)