void dfs(struct Node *root, int *result, int *returnSize)
{
	if (result == NULL)
	{
		return;
	}

	for (int i = 0; i < root->numChildren; i++)
	{
		dfs(root->children[i], result, returnSize);
	}

	result[(*returnSize)++] = root->val;
}

int *postorder(struct Node *root, int *returnSize)
{

	*returnSize = 0;

	if (root == NULL)
	{
		return NULL;
	}

	int *result = (int *)malloc(10000 * sizeof(int));
	if (!result)
	{
		perror("Failed to allocate memory");
		exit(EXIT_FAILURE);
	}
	dfs(root, result, returnSize);

	return result;
}