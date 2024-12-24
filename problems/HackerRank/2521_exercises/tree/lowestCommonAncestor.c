struct TreeNode *lowestCommonAncestor(struct TreeNode *root, struct TreeNode *p, struct TreeNode *q)
{

	struct TreeNode *cur = root;

	while (cur)
	{
		if (p->val > cur->val && q->val > cur->val)
		{
			cur = cur->right;
		}
		else if (p->val < cur->val && q->val < cur->val)
		{
			cur = cur->left;
		}
		else
		{
			return cur;
		}
	}
	return cur;
}