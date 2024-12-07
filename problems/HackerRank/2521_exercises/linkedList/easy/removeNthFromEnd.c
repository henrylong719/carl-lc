struct ListNode *removeNthFromEnd(struct ListNode *head, int n)
{

	struct ListNode *dummyNode = (struct ListNode *)malloc(sizeof(struct ListNode));
	dummyNode->next = head;

	// counter the number of nodes
	int count = 0;
	struct ListNode *counter = head;

	while (counter != NULL)
	{
		count++;
		counter = counter->next;
	}

	int target = count - n;
	struct ListNode *current = dummyNode;

	while (target != 0)
	{
		current = current->next;
		target--;
	}

	current->next = current->next->next;

	return dummyNode->next;
}

struct ListNode *removeNthFromEnd(struct ListNode *head, int n)
{

	struct ListNode *dummyNode = (struct ListNode *)malloc(sizeof(struct ListNode));
	dummyNode->next = head;
	struct ListNode *left = dummyNode;
	struct ListNode *right = head;

	while (n > 0 && right != NULL)
	{
		right = right->next;
		n--;
	}

	while (right != NULL)
	{
		left = left->next;
		right = right->next;
	}

	left->next = left->next->next;

	return dummyNode->next;
}