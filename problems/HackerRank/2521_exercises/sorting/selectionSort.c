
#include <stdio.h>
#include <stdbool.h>

void printArray(int arr[], int size)
{
	int i;
	for (i = 0; i < size; i++)
	{
		printf("%d ", arr[i]);
	}
	printf("\n");
}

void selectionSort(int arr[], int size)
{

	for (int i = 0; i < size - 1; i++)
	{
		int min_idx = i;

		for (int j = i + 1; j < size; j++)
		{
			if (arr[j] < arr[min_idx])
			{
				min_idx = j;
			}
		}

		// Swap
		int temp = arr[i];
		arr[i] = arr[min_idx];
		arr[min_idx] = temp;
	}
}

int main()
{

	int arr[] = {5, 4, 3, 2, 1};

	selectionSort(arr, 5);

	printArray(arr, 5);

	return 0;
}
