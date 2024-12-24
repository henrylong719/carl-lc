bool isSameTree(struct TreeNode *root, struct TreeNode *subRoot)
{
	if (root == NULL && subRoot == NULL)
	{
		return true;
	}

	if (root == NULL || subRoot == NULL)
	{
		return false;
	}

	if (root->val != subRoot->val)
	{
		return false;
	}

	return isSameTree(root->left, subRoot->left) && isSameTree(root->right, subRoot->right);
}

bool isSubtree(struct TreeNode *root, struct TreeNode *subRoot)
{
	if (root == NULL)
	{
		return false;
	}

	if (subRoot == NULL)
	{
		return true;
	}

	if (isSameTree(root, subRoot))
	{
		return true;
	}

	return isSubtree(root->left, subRoot) || isSubtree(root->right, subRoot);
}