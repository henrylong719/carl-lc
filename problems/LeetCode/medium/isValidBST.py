class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        eles = self.dfs_in_order(root)

        for index in range(len(eles) - 1):
            if eles[index] >= eles[index + 1]:
                return False
        return True
        

    def dfs_in_order(self, root):
        results = []

        def traverse(current_node):
            if current_node is None:
                return
            traverse(current_node.left)
            results.append(current_node.val)  # Append the value during in-order traversal
            traverse(current_node.right)
        
        traverse(root)
        return results
      
      
      
class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
       
        def valid(node, left, right):
            if node == None:
                return True
            
            if not(node.val > left and node.val <right):
                return False
            
            return valid(node.left, left, node.val) and valid(node.right, node.val, right)

        return valid(root, float("-inf"), float("inf"))