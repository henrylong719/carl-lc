bool dfs(struct TreeNode *root, int num)
{
	if (!root)
	{
		return true;
	}
	return (root->val == num) && dfs(root->left, num) && dfs(root->right, num);
}

bool isUnivalTree(struct TreeNode *root)
{

	if (root == NULL)
	{
		return true;
	}
	return dfs(root, root->val);
}