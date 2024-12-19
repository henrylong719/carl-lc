void inOrder(struct node *root)
{
	if (root == NULL)
	{
		return;
	}
	if (root->left)
	{
		inOrder(root->left);
	}

	printf("%d ", root->data);

	if (root->right)
	{
		inOrder(root->right);
	}
}