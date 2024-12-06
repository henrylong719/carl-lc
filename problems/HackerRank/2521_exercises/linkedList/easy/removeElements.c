struct ListNode *removeElements(struct ListNode *head, int val)
{

	struct ListNode *dummyNode = (struct ListNode *)malloc(sizeof(struct ListNode));
	dummyNode->next = head;
	struct ListNode *current = dummyNode;

	while (current->next != NULL)
	{
		if (current->next->val == val)
		{
			current->next = current->next->next;
		}
		else
		{
			current = current->next;
		}
	}
	return dummyNode->next;
}