struct ListNode *rotateRight(struct ListNode *head, int k)
{
	if (head == NULL)
	{
		return head;
	}

	struct ListNode *tail = head;
	int length = 1;

	// count the length of the list
	while (tail->next != NULL)
	{
		tail = tail->next;
		length = length + 1;
	}

	k = k % length;
	if (k == 0)
		return head;

	struct ListNode *current = head;
	// find the pivet
	for (int i = 0; i < length - k - 1; i++)
	{
		current = current->next;
	}

	struct ListNode *newHead = current->next;
	current->next = NULL;
	tail->next = head;

	return newHead;
}