import math


def pageCount(n, p):
    
    page_from_front = math.floor(p/2)
    page_from_end = math.ceil((n-p)/2) if n % 2 == 0 else math.floor((n-p)/2)
    
    return min(page_from_front, page_from_end)