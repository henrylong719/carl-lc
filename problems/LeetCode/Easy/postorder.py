class Solution:
    def postorder(self, root: 'Node') -> List[int]:
        queue = []

        def dfs(node):
            if(node == None):
                return
            
            for child in node.children:
                dfs(child)
            queue.append(node.val)
        
        dfs(root)
        return queue
        