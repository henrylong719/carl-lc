SinglyLinkedListNode *insertNodeAtTail(SinglyLinkedListNode *head, int data)
{
	struct SinglyLinkedListNode *newNode = (struct SinglyLinkedListNode *)malloc(sizeof(SinglyLinkedListNode));
	newNode->data = data;
	newNode->next = NULL;

	if (head == NULL)
	{
		return newNode;
	}

	struct SinglyLinkedListNode *current = head;

	while (current->next != NULL)
	{
		current = current->next;
	}

	current->next = newNode;
	return head;
}