### Tree

#### 101.Symmetric Tree

```c
bool dfs(struct TreeNode* p, struct TreeNode* q){
    if(p == NULL && q == NULL){
        return true;
    }

    if((p == NULL || q == NULL) || (p->val != q->val)){
        return false;
    }

    return dfs(p->left,q->right) && dfs(p->right, q->left);

}

bool isSymmetric(struct TreeNode* root) {
    return dfs(root->left, root->right);
}

```



#### 226. Invert Binary Tree



```c

struct TreeNode* invertTree(struct TreeNode* root) {

    if(!root){
        return root;
    }

    struct TreeNode* temp = root->left;
    root->left = root->right;
    root->right = temp;

    invertTree(root->left);
    invertTree(root->right);

    return root;

}
```



#### 563. Binary Tree Tilt

```c
int sum(struct TreeNode* node, int* totalTilt){
    if(node == NULL){
        return 0;
    }

    int leftTilt = sum(node->left, totalTilt);
    int rightTilt = sum(node->right, totalTilt);

    int tilt = abs(leftTilt - rightTilt);

    *totalTilt += tilt;

    return node->val + leftTilt + rightTilt;
}


int findTilt(struct TreeNode* root) {

    int totalTilt = 0;
    sum(root, &totalTilt);
    return totalTilt;
}

```



#### 965. Univalued Tree

```c
bool dfs(struct TreeNode* root, int num){
    if(!root){
        return true;
    }
    return (root->val == num) && dfs(root->left, num) && dfs(root->right, num);

}

bool isUnivalTree(struct TreeNode* root) {

    if(root == NULL){
        return true;
    }
    return dfs(root, root->val);
}

```



#### 938. Range Sum of BST

```c
void dfs(struct TreeNode* node,int low, int high, int* sum){
    if(node == NULL){
        return;
    }
    if(node->val >= low && node->val <= high){
        *sum += node->val;
    }

    if(node->val > low){
        dfs(node->left,low,high,sum);
    }

    if(node->val < high){
        dfs(node->right,low,high,sum);
    }
}

int rangeSumBST(struct TreeNode* root, int low, int high) {
    int sum = 0;
    dfs(root, low, high, &sum);
    return sum;
}

```



#### 230. Kth Samllest Element in a BST

```c
void dfs(struct TreeNode *node, int k, int *count, int *result)
{

	if (node == NULL || *count == k)
	{
		return;
	}

	dfs(node->left, k, count, result);

	(*count)++;

	if (*count == k)
	{
		*result = node->val;
	}

	dfs(node->right, k, count, result);
}

int kthSmallest(struct TreeNode *root, int k)
{

	int count = 0;
	int result = -1;

	dfs(root, k, &count, &result);
	return result;
}

```



#### 572. Subtree of Another Tree



```c
bool isSameTree(struct TreeNode *root, struct TreeNode *subRoot)
{
	if (root == NULL && subRoot == NULL)
	{
		return true;
	}

	if (root == NULL || subRoot == NULL)
	{
		return false;
	}

	if (root->val != subRoot->val)
	{
		return false;
	}

	return isSameTree(root->left, subRoot->left) && isSameTree(root->right, subRoot->right);
}

bool isSubtree(struct TreeNode *root, struct TreeNode *subRoot)
{
	if (root == NULL)
	{
		return false;
	}

	if (subRoot == NULL)
	{
		return true;
	}

	if (isSameTree(root, subRoot))
	{
		return true;
	}

	return isSubtree(root->left, subRoot) || isSubtree(root->right, subRoot);
}

```



#### 530. Minimum Absolute Difference in BST

```c
int min(int a, int b)
{
	return a < b ? a : b;
}

// use dfs in order
void dfs(struct TreeNode *root, int *prev, int *minValue)
{

	if (root == NULL)
	{
		return;
	}

	dfs(root->left, prev, minValue);

	if (*prev != -1)
	{
		int diff = abs(*prev - root->val);
		*minValue = min(diff, *minValue);
	}

	*prev = root->val;

	dfs(root->right, prev, minValue);
}

int getMinimumDifference(struct TreeNode *root)
{
	int minValue = INT_MAX;
	int prev = -1;
	dfs(root, &prev, &minValue);
	return minValue;
}

```



#### 235. Lowest Common Ancestor of a Binary Search Tree



```c
struct TreeNode *lowestCommonAncestor(struct TreeNode *root, struct TreeNode *p, struct TreeNode *q)
{

	struct TreeNode *cur = root;

	while (cur)
	{
		if (p->val > cur->val && q->val > cur->val)
		{
			cur = cur->right;
		}
		else if (p->val < cur->val && q->val < cur->val)
		{
			cur = cur->left;
		}
		else
		{
			return cur;
		}
	}
	return cur;
}

```





#### 513. Find Bottom Left Tree Value



```python
class Solution:
    def findBottomLeftValue(self, root: Optional[TreeNode]) -> int:
        queue = []
        queue.append(root)

        while len(queue):
            node = queue.pop(0)
            if node.right:
                queue.append(node.right)
            if node.left:
                queue.append(node.left)
        
        return node.val

     
```



#### 514. Delete Node in a BST



```c
int minValue(struct TreeNode *node)
{
	while (node->left != NULL)
	{
		node = node->left;
	}
	return node->val;
}

struct TreeNode *deleteNode(struct TreeNode *current, int key)
{
	if (current == NULL)
	{
		return NULL;
	}
	if (key < current->val)
	{
		current->left = deleteNode(current->left, key);
	}
	else if (key > current->val)
	{
		current->right = deleteNode(current->right, key);
	}
	else
	{
		if (current->left == NULL && current->right == NULL)
		{
			return NULL;
		}
		if (current->left == NULL)
		{
			return current->right;
		}
		if (current->right == NULL)
		{
			return current->left;
		}
		else
		{
			int min = minValue(current->right);
			current->val = min;
			current->right = deleteNode(current->right, min);
		}
	}
	return current;
}

```



#### 112. Path Sum

```c
bool dfs(struct TreeNode *root, int targetSum, int currentSum)
{

	if (!root)
	{
		return false;
	}

	currentSum += root->val;

	// find the leaf
	if (root->left == NULL && root->right == NULL)
	{
		return currentSum == targetSum;
	}

	return dfs(root->left, targetSum, currentSum) || dfs(root->right, targetSum, currentSum);
}

bool hasPathSum(struct TreeNode *root, int targetSum)
{
	return dfs(root, targetSum, 0);
}




bool hasPathSum2(struct TreeNode *root, int targetSum)
{

	if (!root)
	{
		return false;
	}

	targetSum -= root->val;

	if (root->left == NULL && root->right == NULL)
	{
		return targetSum == 0;
	}

	return hasPathSum(root->left, targetSum) || hasPathSum(root->right, targetSum);
}

```





#### 98. Validate Bianry Search Tree

```c

#include <stdbool.h>
#include <limits.h>

bool isValid(struct TreeNode *root, long left, long right)
{
	if (root == NULL)
	{
		return true;
	}

	if (!(root->val > left && root->val < right))
	{
		return false;
	}

	return isValid(root->left, left, root->val) && isValid(root->right, root->val, right);
}

bool isValidBST(struct TreeNode *root)
{
	return isValid(root, LONG_MIN, LONG_MAX);
}

```



#### 1305. All Elements  in Two Binary Search Tree

```python
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

```



#### 589. N-ary Tree Preorder Traversal

```python
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

```



```c
void dfs(struct Node *root, int *result, int *returnSize)
{

	// base case
	if (root == NULL)
	{
		return;
	}

	result[(*returnSize)++] = root->val;

	for (int i = 0; i < root->numChildren; i++)
	{
		dfs(root->children[i], result, returnSize);
	}
}

int *preorder(struct Node *root, int *returnSize)
{

	*returnSize = 0;

	if (root == NULL)
	{
		return NULL;
	}

	int *result = (int *)malloc(10000 * sizeof(int));
  if (!result)
	{
		perror("Failed to allocate memory");
		exit(EXIT_FAILURE);
	}

	dfs(root, result, returnSize);

	return result;
}

```



#### 590. N-ary Tree Postorder Traversal

```python
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

```



```c
void dfs(struct Node *root, int *result, int *returnSize)
{
	if (result == NULL)
	{
		return;
	}

	for (int i = 0; i < root->numChildren; i++)
	{
		dfs(root->children[i], result, returnSize);
	}

	result[(*returnSize)++] = root->val;
}

int *postorder(struct Node *root, int *returnSize)
{

	*returnSize = 0;

	if (root == NULL)
	{
		return NULL;
	}

	int *result = (int *)malloc(10000 * sizeof(int));
	if (!result)
	{
		perror("Failed to allocate memory");
		exit(EXIT_FAILURE);
	}
	dfs(root, result, returnSize);

	return result;
}

```



# HackerRank

### Tree

#### Huffman Decoding

```python
def decodeHuff(root, s):
    list = []
    temp = root
    
    for char in s:
        if char == '0':
            temp = temp.left
        else:
            temp = temp.right
        if not temp.left and not temp.right:
            list.append(temp.data)
            temp = root
    
    return print("".join(list))
  
```



