

bool isSym(struct TreeNode *p, struct TreeNode *q)
{
	if (p == NULL && q == NULL)
	{
		return true;
	}

	if ((p == NULL || q == NULL) || (p->val != q->val))
	{
		return false;
	}

	return isSym(p->left, q->right) && isSym(p->right, q->left);
}

bool isSymmetric(struct TreeNode *root)
{
	return isSym(root->left, root->right);
}