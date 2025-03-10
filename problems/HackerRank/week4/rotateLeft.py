def rotateLeft(d, arr):
  	#  (1 <= d <= n)
    # d = d % len(arr)
    return arr[d:] + arr[0:d]