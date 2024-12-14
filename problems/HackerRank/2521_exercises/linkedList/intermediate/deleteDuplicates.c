struct ListNode *deleteDuplicates(struct ListNode *head)
{

	if (head == NULL)
	{
		return head;
	}

	struct ListNode *dummyNode = (struct ListNode *)malloc(sizeof(struct ListNode));
	dummyNode->next = head;
	struct ListNode *slow = dummyNode;
	struct ListNode *current = head;

	while (current != NULL)
	{
		// check duplicate nodes
		if (current->next && current->val == current->next->val)
		{
			// move the point unitl find new node
			while (current->next && current->val == current->next->val)
			{
				current = current->next;
			}
			slow->next = current->next;
		}
		else
		{
			slow = slow->next;
		}
		current = current->next;
	}
	return dummyNode->next;
}