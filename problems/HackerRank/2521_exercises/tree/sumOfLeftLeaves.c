bool isLeaf(struct TreeNode *node)
{
	if (node == NULL)
	{
		return false;
	}
	if (node->left == NULL && node->right == NULL)
	{
		return true;
	}
	return false;
}

int sumOfLeftLeaves(struct TreeNode *root)
{
	int sum = 0;
	if (root != NULL)
	{
		if (isLeaf(root->left))
		{
			sum += root->left->val;
		}
		else
		{
			sum += sumOfLeftLeaves(root->left);
		}
		sum += sumOfLeftLeaves(root->right);
	}
	return sum;
}
