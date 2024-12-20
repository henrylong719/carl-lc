

# Leetcode

## EASY

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











