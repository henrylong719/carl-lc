int minValue(struct TreeNode *node)
{
	while (node->left != NULL)
	{
		node = node->left;
	}
	return node->val;
}

struct TreeNode *deleteNode(struct TreeNode *current, int key)
{
	if (current == NULL)
	{
		return NULL;
	}
	if (key < current->val)
	{
		current->left = deleteNode(current->left, key);
	}
	else if (key > current->val)
	{
		current->right = deleteNode(current->right, key);
	}
	else
	{
		if (current->left == NULL && current->right == NULL)
		{
			return NULL;
		}
		if (current->left == NULL)
		{
			return current->right;
		}
		if (current->right == NULL)
		{
			return current->left;
		}
		else
		{
			int min = minValue(current->right);
			current->val = min;
			current->right = deleteNode(current->right, min);
		}
	}
	return current;
}