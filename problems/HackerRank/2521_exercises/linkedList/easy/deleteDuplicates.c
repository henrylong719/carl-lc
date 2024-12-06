
struct ListNode *deleteDuplicates(struct ListNode *head)
{

	if (!head)
	{
		return head;
	}

	struct ListNode *current = head;
	while (current && current->next)
	{
		if (current->val == current->next->val)
		{
			struct ListNode *temp = current->next;
			current->next = temp->next;
			free(temp);
		}
		else
		{
			current = current->next;
		}
	}
	return head;
}