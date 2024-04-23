/** findIndex: return index of val in arr (or -1 if val is not present). */

function findIndex(arr: number[], val: number): number {
  if (arr.length === 0) {
    return -1;
  }
  if (arr[0] === val) {
    return 0;
  }
  const index = findIndex(arr.slice(1), val);

  return index === -1 ? -1 : (index + 1);
}


// [1, 2, 3], 3 =>2

//[2, 3], 3 => 1

// [3], 3 => 0

//[2, 3], 3     =>
export { findIndex };