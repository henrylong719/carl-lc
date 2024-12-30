
#include <stdbool.h>
#include <limits.h>

bool isValid(struct TreeNode *root, long left, long right)
{
	if (root == NULL)
	{
		return true;
	}

	if (!(root->val > left && root->val < right))
	{
		return false;
	}

	return isValid(root->left, left, root->val) && isValid(root->right, root->val, right);
}

bool isValidBST(struct TreeNode *root)
{
	return isValid(root, LONG_MIN, LONG_MAX);
}