def kangaroo(x1, v1, x2, v2):
    # Write your code here
    # x1 + zv1 = x2 + zv2
    # z(v1 - v2) = x2 - x1
    # z = (x2 - x1) / (v1 - v2)
    
    if v1 == v2:
        if x2 == x1:
            return 'YES'
        return 'NO'

    z = (x2 - x1) / (v1 - v2)
    
    if z.is_integer() and z > 0:
        return 'YES'
    return 'NO'