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
        
    def minDepth2(self, root: Optional[TreeNode]) -> int:
        if not root:
            return 0

        queue = [] 
        queue.append([root, 1])

        while len(queue):
            node, depth = queue.pop(0)
            if not node.left and not node.right:
                return depth            
            if node.left:
                queue.append([node.left, depth + 1])
            if node.right:
                queue.append([node.right, depth + 1])

    