class Solution:
    def countNodes(self, root: Optional[TreeNode]) -> int:
        if(not root):
            return 0

        count = 0
        queue = []
        queue.append(root)

        while len(queue):
            node = queue.pop(0)
            count += 1
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)

        return count