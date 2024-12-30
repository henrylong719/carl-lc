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

bool hasPathSum(struct TreeNode *root, int targetSum)
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