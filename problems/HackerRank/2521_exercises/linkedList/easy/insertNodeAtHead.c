SinglyLinkedListNode *insertNodeAtHead(SinglyLinkedListNode *llist, int data)
{
	struct SinglyLinkedListNode *newNode = (struct SinglyLinkedListNode *)malloc(sizeof(SinglyLinkedListNode));
	newNode->data = data;
	newNode->next = llist;
	return newNode;
}
