class Solution:
    def minDepth(self, root: Optional[TreeNode]) -> int:
        if not root:
            return 0

        self.minDepth = float('inf') 

        self.dfs(root, 0)

        return self.minDepth

    def dfs(self, root, current_depth):
        # base case
        if not root:
            return
        
        if (not root.left) and (not root.right):
            self.minDepth = min(self.minDepth, current_depth + 1)
            return 
            
        self.dfs(root.left, current_depth + 1)
        self.dfs(root.right, current_depth + 1)