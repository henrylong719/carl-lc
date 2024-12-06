DoublyLinkedListNode *sortedInsert(DoublyLinkedListNode *llist, int data)
{

	struct DoublyLinkedListNode *newNode = (struct DoublyLinkedListNode *)malloc(sizeof(DoublyLinkedListNode));
	newNode->data = data;
	newNode->next = NULL;
	newNode->prev = NULL;

	// if the list is empty, return the newNode as the head
	if (llist == NULL)
	{
		return newNode;
	}

	// if the newNode has to insert at the beginning
	if (llist->data > data)
	{
		newNode->next = llist;
		llist->prev = newNode;
		return newNode;
	}

	//  1,3,4,5,10
	// traverse the list to find the correct postion
	struct DoublyLinkedListNode *current = llist;
	while (current->next != NULL && current->next->data < data)
	{
		current = current->next;
	}

	// insert the new node at the specified postion
	newNode->prev = current;
	newNode->next = current->next;
	if (current->next != NULL)
	{
		current->next->prev = newNode;
	}
	current->next = newNode;

	return llist;
}
