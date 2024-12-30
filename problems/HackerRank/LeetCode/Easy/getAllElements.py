class Solution:
    def getAllElements(self, root1: Optional[TreeNode], root2: Optional[TreeNode]) -> List[int]:

        queue1 = []
        queue2 = []

        def bfs(root, queue):
            if not root:
                return None
            if root.left:
                bfs(root.left,queue)
            queue.append(root.val)
            if root.right:
                bfs(root.right,queue)
        
        bfs(root1, queue1)
        bfs(root2, queue2)

        queue = queue1 + queue2
        queue.sort()

        return queue