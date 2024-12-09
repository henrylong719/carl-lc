void reversePrint(SinglyLinkedListNode *llist)
{

	if (llist == NULL)
	{
		return;
	}

	// reverse list
	struct SinglyLinkedListNode *prev = NULL;

	while (llist != NULL)
	{
		struct SinglyLinkedListNode *temp = llist->next;
		llist->next = prev;
		prev = llist;
		llist = temp;
	}

	// traverse list from the end
	struct SinglyLinkedListNode *current = prev;
	while (current)
	{
		printf("%d\n", current->data);
		current = current->next;
	}
}

void reversePrint(SinglyLinkedListNode *llist)
{

	if (llist == NULL)
	{
		return;
	}

	reversePrint(llist->next);
	printf("%d\n", llist->data);
}