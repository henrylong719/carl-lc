#include <stdio.h>
#include <stdbool.h>

void swap(int *xp, int *yp)
{
	int temp = *xp;
	*xp = *yp;
	*yp = temp;
}

void bubbleSort(int arr[], int lo, int hi)
{
	for (int i = hi; i > lo; hi--)
	{
		bool swapped = false;

		for (int j = lo; j < hi; j++)
		{
			if (arr[j] > arr[j + 1])
			{
				swap(&arr[j], &arr[j + 1]);
				swapped = true;
			}
		}

		if (!swapped)
		{
			return;
		}
	}
}

void printArray(int arr[], int size)
{
	int i;
	for (i = 0; i < size; i++)
		printf("%d ", arr[i]);
}

int main()
{

	int arr[] = {5, 4, 3, 2, 1};

	bubbleSort(arr, 0, 4);

	printArray(arr, 5);

	return 0;
}
