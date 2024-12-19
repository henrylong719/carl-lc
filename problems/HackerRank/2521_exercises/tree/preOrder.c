void preOrder(struct node *root)
{
	if (root == NULL)
	{
		return;
	}
	printf("%d ", root->data);
	if (root->left)
	{
		preOrder(root->left);
	}
	if (root->right)
	{
		preOrder(root->right);
	}
}