
#include <stdio.h>
#include <stdlib.h>

struct node
{
	int value;
	struct node *next;
};

struct node *selectionSort(struct node *list)
{

	for (struct node *start = list; start != NULL; start = start->next)
	{
		struct node *min_node = start;

		for (struct node *curr = start->next; curr != NULL; curr = curr->next)
		{
			if (curr->value < min_node->value)
			{
				min_node = curr;
			}
		}

		if (min_node != start)
		{
			int temp = start->value;
			start->value = min_node->value;
			min_node->value = temp;
		}
	}
	return list;
}

void printList(struct node *node)
{
	struct node *curr = node;
	while (curr != NULL)
	{
		printf(" %d", curr->value);
		curr = curr->next;
	}
	printf("\n");
}

struct node *createNode(int new_data)
{
	struct node *new_node = (struct node *)malloc(sizeof(struct node));
	new_node->value = new_data;
	new_node->next = NULL;
	return new_node;
}

int main()
{

	// Create a hard-coded linked list:
	// 5 -> 3 -> 4 -> 1 -> 2
	struct node *head = createNode(5);
	head->next = createNode(3);
	head->next->next = createNode(4);
	head->next->next->next = createNode(1);
	head->next->next->next->next = createNode(2);

	head = selectionSort(head);

	printList(head);

	return 0;
}