SinglyLinkedListNode *insertNodeAtPosition(SinglyLinkedListNode *llist, int data, int position)
{

	struct SinglyLinkedListNode *newNode = (struct SinglyLinkedListNode *)malloc(sizeof(SinglyLinkedListNode));
	newNode->data = data;

	if (position == 0)
	{
		newNode->next = llist;
	}

	// 16,13,7
	// 2
	struct SinglyLinkedListNode *current = llist;
	for (int i = 0; i < position - 1; i++)
	{
		if (current == NULL)
		{
			return llist;
		}
		current = current->next;
	}

	newNode->next = current->next;
	current->next = newNode;
	return llist;
}