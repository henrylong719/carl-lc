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

	dfs(root, result, returnSize);

	return result;
}