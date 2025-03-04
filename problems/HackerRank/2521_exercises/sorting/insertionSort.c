
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

void insertionSort(int arr[], int size)
{

	for (int i = 1; i < size; i++)
	{

		int key = arr[i];

		int j = i - 1;

		while (j >= 0 && arr[j] > key)
		{
			arr[j + 1] = arr[j];
			j--;
		}
		arr[j + 1] = key;
	}
}

int main()
{

	int arr[] = {5, 4, 3, 2, 1};

	insertionSort(arr, 5);

	printArray(arr, 5);

	return 0;
}