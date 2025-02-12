from functools import cache


def climbStairs(self, n: int) -> int:
		@cache
		def fib(n: int) -> int:
				if n <= 1:
						return 1
				return fib(n - 1) +  fib(n - 2)
		return fib(n)



def climbStairs(self, n: int) -> int:
		f0 = f1 = 1

		for i in range(2, n + 1):
				temp = f0 + f1
				f0 = f1
				f1 = temp
		
		return f1