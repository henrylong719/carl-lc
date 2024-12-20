
bool dfs(struct TreeNode *p, struct TreeNode *q)
{
	if (p == NULL && q == NULL)
	{
		return true;
	}

	if ((p == NULL || q == NULL) || (p->val != q->val))
	{
		return false;
	}

	return dfs(p->left, q->right) && dfs(p->right, q->left);
}

bool isSymmetric(struct TreeNode *root)
{
	return dfs(root->left, root->right);
}