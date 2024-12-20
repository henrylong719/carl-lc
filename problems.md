

## Leetcode



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















