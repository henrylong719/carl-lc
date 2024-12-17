

struct TreeNode *searchBST(struct TreeNode *root, int val)
{

	if (root == NULL || root->val == val)
	{
		return root;
	}

	if (val < root->val)
	{
		return searchBST(root->left, val);
	}
	else
	{
		return searchBST(root->right, val);
	}
}
