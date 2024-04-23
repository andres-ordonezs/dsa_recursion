/** find: return t/f is val is in arr. */

function find(arr: number[], val: number): boolean {
  // return true;
  if (arr.length === 0) {
    return false;
  }
  return arr[0] === val || find(arr.slice(1), val);
}

export { find };


/*
[1, 2, 3], 3
1 === 3 || find([2,3], 3)
2 === 3 || find([3], 3)
3 === 3 || find([], 3)
*/