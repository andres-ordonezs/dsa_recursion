/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearchIndex(
    arr: number[],
    val: number,
    left = 0,
    right = arr.length): number {
      if (left > right) {
        return -1;
      }

      const midPoint = Math.floor((left + right) / 2);
      if (arr[midPoint] === val) {
        return midPoint;
      }
      if (arr[midPoint] > val) {
        right = midPoint - 1;
        return binarySearchIndex(arr, val, left, right);
      }

      left = midPoint + 1;
      return binarySearchIndex(arr, val, left, right);
}

export { binarySearchIndex };