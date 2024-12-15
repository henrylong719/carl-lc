bool hasCycle(struct ListNode *head)
{

	if (head == NULL || head->next == NULL)
	{
		return 0;
	}

	struct ListNode *fast = head->next;
	struct ListNode *slow = head;

	while (fast && fast->next)
	{
		if (fast == slow)
		{
			return 1;
		}

		fast = fast->next->next;
		slow = slow->next;
	}
	return 0;
}