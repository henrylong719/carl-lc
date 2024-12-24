

# Leetcode

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

