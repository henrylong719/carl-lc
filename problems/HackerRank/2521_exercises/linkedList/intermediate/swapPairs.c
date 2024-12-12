struct ListNode *swapPairs(struct ListNode *head)
{

	struct ListNode *dummyNode = (struct ListNode *)malloc(sizeof(struct ListNode));
	dummyNode->next = head;
	struct ListNode *prev = dummyNode;
	struct ListNode *current = head;

	// make sure having two nodes to swap
	while (current && current->next)
	{

		// save next pair node
		struct ListNode *nextPair = current->next->next;
		struct ListNode *second = current->next;

		// swap
		second->next = current;
		current->next = nextPair;
		prev->next = second;

		// update nodes
		prev = current;
		current = nextPair;
	}

	return dummyNode->next;
}