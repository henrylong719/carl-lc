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