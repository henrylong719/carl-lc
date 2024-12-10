SinglyLinkedListNode *mergeLists(SinglyLinkedListNode *head1, SinglyLinkedListNode *head2)
{

	if (head1 == NULL)
		return head2;
	if (head2 == NULL)
		return head1;

	struct SinglyLinkedListNode *dummyNode = (struct SinglyLinkedListNode *)malloc(sizeof(struct SinglyLinkedListNode));
	struct SinglyLinkedListNode *current = dummyNode;

	while (head1 && head2)
	{
		if (head1->data < head2->data)
		{
			current->next = head1;
			head1 = head1->next;
		}
		else
		{
			current->next = head2;
			head2 = head2->next;
		}
		current = current->next;
	}

	if (head1 != NULL)
	{
		current->next = head1;
	}
	else
	{
		current->next = head2;
	}

	SinglyLinkedListNode *mergedHead = dummyNode->next;
	free(dummyNode);

	return mergedHead;
}

// without using dummynode

SinglyLinkedListNode *mergeLists2(SinglyLinkedListNode *head1, SinglyLinkedListNode *head2)
{

	if (head1 == NULL)
		return head2;
	if (head2 == NULL)
		return head1;

	struct SinglyLinkedListNode *mergedHead = NULL;

	if (head1->data < head2->data)
	{
		mergedHead = head1;
		head1 = head1->next;
	}
	else
	{
		mergedHead = head2;
		head2 = head2->next;
	}

	struct SinglyLinkedListNode *current = mergedHead;

	while (head1 != NULL && head2 != NULL)
	{
		if (head1->data < head2->data)
		{
			current->next = head1;
			head1 = head1->next;
		}
		else
		{
			current->next = head2;
			head2 = head2->next;
		}

		current = current->next;
	}

	current->next = head1 != NULL ? head1 : head2;

	return mergedHead;
}