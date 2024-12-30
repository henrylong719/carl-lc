class Solution:
    def preorder(self, root: 'Node') -> List[int]:

        queue = []

        def dfs(node):
            if node == None:
                return
            queue.append(node.val)
            for child in node.children:
                dfs(child)
        
        dfs(root)
        return queue