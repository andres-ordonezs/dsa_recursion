/** binarySearch: given a sorted array of numbers, and a value,
 * return true if val is in array, false if not present). */

function binarySearch(
  arr: number[],
  val: number,
  left = 0,
  right = arr.length
): boolean {
  if (left > right) {
    return false;
  }

  const midPoint = Math.floor((left + right) / 2);

  if (arr[midPoint] === val) {
    return true;
  }

  if (arr[midPoint] > val) {
    right = midPoint - 1;
    return binarySearch(arr, val, left, right);
  }

  left = midPoint + 1;
  return binarySearch(arr, val, left, right);

  // if (arr[midPoint] < val) {
  //   left = midPoint + 1;
  //   return binarySearch(arr, val, left, right);
  // }
}

export {binarySearch};

/*
[1,2,3,4], 4

binarySearch([1,2,3,4], 3,left=0, right=4)
-> midPoint = Math.floor(0+4 / 2) = 2 =idx
-> arr[idx=2] < 4
-> left: arr[idx=2 + 1]
binarySearch()

base case: if(left>right){
  return false
}



*/
