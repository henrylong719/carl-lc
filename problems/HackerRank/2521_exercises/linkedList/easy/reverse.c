
DoublyLinkedListNode *reverse(DoublyLinkedListNode *llist)
{

	// base case: if the list is empty or we reach the end of the list
	if (llist == NULL)
	{
		return llist;
	}

	// Swap the next and prev pointer
	struct DoublyLinkedListNode *temp = llist->prev;
	llist->prev = llist->next;
	llist->next = temp;

	// if the previous node is NULL (after swap)
	if (llist->prev == NULL)
	{
		return llist;
	}

	// Recurse for the next node
	return reverse(llist->prev);
}
