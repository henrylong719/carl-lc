int max(int a, int b)
{
	if (a > b)
	{
		return a;
	}
	else
	{
		return b;
	}
}

int maxDepth(struct TreeNode *root)
{
	if (!root)
	{
		return 0;
	}
	return 1 + max(maxDepth(root->left), maxDepth(root->right));
}