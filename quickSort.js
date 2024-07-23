const swap = (arr, a, b) => {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

const quickSort = (arr, start, end) => {
  if (end <= start) return;
  const pivot = partition(arr, start, end);
  quickSort(arr, start, pivot - 1);
  quickSort(arr, pivot + 1, end);
}

const partition = (arr, start, end) => {
  const pivot = arr[end];
  let i = start - 1;
  for (let j = start; j < end; j++) {
    if (arr[j] < pivot) {
      i++;
      swap(arr, i, j);
    }
  }
  i++;
  swap(arr, i, end);
  return i;
}

const arr = [1, 8, 10, 2, 8, 19,-1, 4, 5];
quickSort(arr, 0, arr.length - 1);
console.log(arr);  // Output: [1, 2, 4, 5, 8, 8, 10, 19]
