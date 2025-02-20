
def flippingBits(n):
    return (2**32 - 1) - n
    
def dec_to_bin(x:int):
    return bin(x)[2:]
  
def bin_to_dec(binary:str):
    return int(binary, 2)
  
  
  
print(flippingBits(10))