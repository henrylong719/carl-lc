def findPeakGrid(self, mat: List[List[int]]) -> List[int]:
		left = 0
		right = len(mat) - 2

		while left <= right:
				i = (left + right) // 2
				j = self.indexOfMax(mat[i])

				# the peak is in the above
				if mat[i][j] > mat[i+1][j]:
						right = i - 1
				else:
						left = i + 1    

		return [left, self.indexOfMax(mat[left]) ]

def indexOfMax(self, arr: List[int]) -> int:
		idx = 0
		
		for i in range(len(arr)):
				if arr[i] > arr[idx]:
						idx = i
		return idx



def findPeakGrid2(self, mat: List[List[int]]) -> List[int]:
		left = 0
		right = len(mat) - 2

		while left <= right:

				i = (left + right) // 2
				mx = max(mat[i])

				if mx > mat[i + 1][mat[i].index(mx)]:
						right = i - 1
				else:
						left = i + 1
		
		return [left, mat[left].index(max(mat[left]))]