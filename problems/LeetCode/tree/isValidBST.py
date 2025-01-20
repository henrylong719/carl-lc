def isValidBST(self, root: Optional[TreeNode]) -> bool:
		
		def dfs(node:Optional[TreeNode], mn: int, mx: int) -> bool:
				if not node:
						return True
				
				if node.val <= mn or node.val >= mx:
						return False

				return dfs(node.left,mn, node.val) and dfs(node.right, node.val, mx)

		
		return dfs(root, -inf, inf)

class Solution:
  pre = -inf
  def isValidBST(self, root: Optional[TreeNode]) -> bool:

      if not root:
          return True

      if not self.isValidBST(root.left):
          return False

      if root.val <= self.pre:
          return False

      self.pre = root.val

      if not self.isValidBST(root.right):
          return False

      return True
    
    
def isValidBST(self, root: Optional[TreeNode]) -> bool:

		def dfs(node: Optional[TreeNode]) -> tuple:
				
				if not node:
						return inf, -inf

				min_left, max_left = dfs(node.left)
				min_right, max_right = dfs(node.right)

				x = node.val

				if x <= max_left or x >= min_right:
						return -inf, inf
				
				return min(min_left, x), max(max_right, x)

		return dfs(root)[1] != inf