struct Result
{
	bool isBalanced;
	int height;
};

int max(int a, int b)
{
	return a > b ? a : b;
}

struct Result bfs(struct TreeNode *root)
{
	if (root == NULL)
	{
		struct Result result = {true, 0};
		return result;
	}

	struct Result left = bfs(root->left);
	struct Result right = bfs(root->right);

	bool balance = left.isBalanced && right.isBalanced && (abs(left.height - right.height) <= 1);

	struct Result result = {balance, 1 + max(left.height, right.height)};

	return result;
}

bool isBalanced(struct TreeNode *root)
{
	return bfs(root).isBalanced;
}
