def decodeHuff(root, s):
	#Enter Your Code Here
    list = []
    temp = root
    
    for char in s:
        if char == '0':
            temp = temp.left
        else:
            temp = temp.right
        if not temp.left and not temp.right:
            list.append(temp.data)
            temp = root
    
    return print("".join(list))
            