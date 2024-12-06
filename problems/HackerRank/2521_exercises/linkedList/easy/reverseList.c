struct ListNode *reverseList(struct ListNode *head)
{

	struct ListNode *curr = head, *prev = NULL, *next = NULL;

	while (curr != NULL)
	{

		// store next
		next = curr->next;
		// reverse current node's next pointer
		curr->next = prev;
		// move pointer one position ahead
		prev = curr;
		curr = next;
	}

	return prev;
}