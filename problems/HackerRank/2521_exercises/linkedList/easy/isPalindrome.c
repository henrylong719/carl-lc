bool isPalindrome(struct ListNode *head)
{

	struct ListNode *slow = head;
	struct ListNode *fast = head;

	// traverse fast pointer until end of the list to find the middle node
	while (fast != NULL && fast->next != NULL)
	{
		fast = fast->next->next;
		slow = slow->next;
	}

	// reverse list from the slow
	struct ListNode *prev = NULL;
	while (slow != NULL)
	{
		struct ListNode *temp = slow->next;
		slow->next = prev;
		prev = slow;
		slow = temp;
	}

	struct ListNode *left = head;
	struct ListNode *right = prev;

	// compare node values
	while (right)
	{
		if (left->val != right->val)
		{
			return false;
		}
		left = left->next;
		right = right->next;
	}
	return true;
}