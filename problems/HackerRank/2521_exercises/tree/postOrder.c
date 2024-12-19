void postOrder(struct node *root)
{
	if (!root)
	{
		return;
	}

	if (root->left)
	{
		postOrder(root->left);
	}
	if (root->right)
	{
		postOrder(root->right);
	}
	printf("%d ", root->data);
}