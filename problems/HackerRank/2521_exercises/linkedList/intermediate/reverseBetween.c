struct ListNode *reverseBetween(struct ListNode *head, int left, int right)
{

	struct ListNode *dummyNode = (struct ListNode *)malloc(sizeof(struct ListNode));
	dummyNode->next = head;
	struct ListNode *leftPrev = dummyNode;
	struct ListNode *current = head;

	// move leftPrev pointer to the one left position of the left
	for (int i = 0; i < left - 1; i++)
	{
		leftPrev = current;
		current = current->next;
	}

	struct ListNode *prev = NULL;

	// reverse the nodes between left and right
	for (int i = 0; i < right - left + 1; i++)
	{
		struct ListNode *temp = current->next;
		current->next = prev;
		prev = current;
		current = temp;
	}

	// reconnect nodes
	leftPrev->next->next = current;
	leftPrev->next = prev;

	return dummyNode->next;
}