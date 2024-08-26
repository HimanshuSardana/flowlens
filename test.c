// Binary Search
#include <stdio.h>

int main() {
  int arr[5] = {1, 2, 3, 4, 5};

  int left = 0;
  int right = 4;

  int elem = 3;

  while (left <= right) {
    int mid = (left + right) / 2;

    if (arr[mid] == elem) {
      printf("Element found at index %d\n", mid);
      break;
    } else if (arr[mid] < elem) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
}
